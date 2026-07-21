const WORDPRESS_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL?.replace(/\/$/, "") ||
  "https://molg.go.ug";

export function stripHtml(value: string) {
  return value
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .trim();
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function getFeaturedImage(post: {
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
      media_details?: {
        sizes?: {
          full?: {
            source_url?: string;
          };
          large?: {
            source_url?: string;
          };
          medium_large?: {
            source_url?: string;
          };
        };
      };
    }>;
  };
}) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  return (
    media?.media_details?.sizes?.full?.source_url ||
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    null
  );
}

export function getPostCategory(post: {
  _embedded?: {
    "wp:term"?: Array<
      Array<{
        name: string;
        slug?: string;
        taxonomy: string;
      }>
    >;
  };
}) {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];

  return (
    terms.find((term) => term.taxonomy === "category") ?? {
      name: "Ministry News",
      slug: "news",
      taxonomy: "category",
    }
  );
}

export function getPostAuthor(post: {
  _embedded?: {
    author?: Array<{
      name?: string;
      slug?: string;
      avatar_urls?: Record<string, string>;
    }>;
  };
}) {
  const embeddedAuthor = post._embedded?.author?.[0];

  const authorName =
    embeddedAuthor?.name?.trim() ||
    "Ministry of Local Government";

  return {
    name: authorName,
    slug: embeddedAuthor?.slug || "",
    avatar:
      embeddedAuthor?.avatar_urls?.["96"] ||
      embeddedAuthor?.avatar_urls?.["48"] ||
      embeddedAuthor?.avatar_urls?.["24"] ||
      null,
    initials: authorName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join(""),
  };
}

export function prepareWordPressContent(content: string) {
  let preparedContent = content;

  preparedContent = preparedContent.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    "",
  );

  preparedContent = preparedContent.replace(
    /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
    "",
  );

  // Restore images inserted through WordPress lazy-loading plugins.
  preparedContent = preparedContent.replace(
    /data-lazy-src=["']([^"']+)["']/gi,
    'src="$1"',
  );

  preparedContent = preparedContent.replace(
    /data-src=["']([^"']+)["']/gi,
    'src="$1"',
  );

  preparedContent = preparedContent.replace(
    /data-original=["']([^"']+)["']/gi,
    'src="$1"',
  );

  // Convert relative WordPress media paths to absolute paths.
  preparedContent = preparedContent.replace(
    /src=["']\/wp-content\//gi,
    `src="${WORDPRESS_URL}/wp-content/`,
  );

  preparedContent = preparedContent.replace(
    /href=["']\/wp-content\//gi,
    `href="${WORDPRESS_URL}/wp-content/`,
  );

  // Make links to WordPress articles open on the Next.js frontend.
  const escapedWordPressUrl = WORDPRESS_URL.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );

  const linkPattern = new RegExp(
    `href=["']${escapedWordPressUrl}/([^"'?#]+?)/?["']`,
    "gi",
  );

  preparedContent = preparedContent.replace(
    linkPattern,
    (_match, path: string) => {
      const cleanPath = path.replace(/^\/+|\/+$/g, "");

      if (
        cleanPath.startsWith("wp-content/") ||
        cleanPath.startsWith("wp-admin/") ||
        cleanPath.startsWith("wp-json/") ||
        cleanPath.startsWith("category/") ||
        cleanPath.startsWith("tag/")
      ) {
        return `href="${WORDPRESS_URL}/${cleanPath}"`;
      }

      const slug = cleanPath.split("/").filter(Boolean).pop();

      return slug
        ? `href="/news/${slug}"`
        : 'href="/news"';
    },
  );

  return preparedContent;
}