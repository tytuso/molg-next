import type { Post } from "@/types/post";

const WORDPRESS_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL?.replace(/\/$/, "") ||
  "https://molg.go.ug";

const API_URL = `${WORDPRESS_URL}/wp-json/wp/v2`;

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const responseText = await response.text();

    console.error("WordPress API error:", {
      url,
      status: response.status,
      responseText,
    });

    throw new Error(
      `WordPress request failed with status ${response.status}`,
    );
  }

  return response.json() as Promise<T>;
}

export async function getPosts(
  page = 1,
  perPage = 10,
): Promise<Post[]> {
  return fetchAPI<Post[]>(
    `/posts?_embed=1&page=${page}&per_page=${perPage}&orderby=date&order=desc`,
  );
}

export async function getPost(
  slug: string,
): Promise<Post | null> {
  const cleanSlug = decodeURIComponent(slug)
    .trim()
    .replace(/^\/+|\/+$/g, "");

  const posts = await fetchAPI<Post[]>(
    `/posts?_embed=1&slug=${encodeURIComponent(cleanSlug)}`,
  );

  return posts[0] ?? null;
}

export async function getRelatedPosts(
  currentPostId: number,
  categoryIds: number[] = [],
  limit = 5,
): Promise<Post[]> {
  const categoryQuery =
    categoryIds.length > 0
      ? `&categories=${categoryIds[0]}`
      : "";

  try {
    const relatedPosts = await fetchAPI<Post[]>(
      `/posts?_embed=1&per_page=${limit}&exclude=${currentPostId}${categoryQuery}&orderby=date&order=desc`,
    );

    if (relatedPosts.length >= limit) {
      return relatedPosts.slice(0, limit);
    }

    const fallbackPosts = await fetchAPI<Post[]>(
      `/posts?_embed=1&per_page=${limit + 1}&exclude=${currentPostId}&orderby=date&order=desc`,
    );

    const combinedPosts = [...relatedPosts];

    for (const post of fallbackPosts) {
      const alreadyIncluded = combinedPosts.some(
        (existingPost) => existingPost.id === post.id,
      );

      if (!alreadyIncluded) {
        combinedPosts.push(post);
      }

      if (combinedPosts.length === limit) {
        break;
      }
    }

    return combinedPosts.slice(0, limit);
  } catch (error) {
    console.error("Unable to load related posts:", error);

    return [];
  }
}

export async function getCategories() {
  return fetchAPI(
    "/categories?per_page=100&orderby=name&order=asc",
  );
}