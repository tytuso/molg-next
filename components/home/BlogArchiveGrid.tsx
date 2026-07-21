"use client";

import type { Post } from "@/types/post";
import BlogArchiveCard from "./BlogArchiveCard";

interface BlogArchiveGridProps {
  posts: Post[];
}

export default function BlogArchiveGrid({
  posts,
}: BlogArchiveGridProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
        md:grid-cols-3
        xl:grid-cols-4
        xl:gap-5
      "
    >
      {posts.map((post) => (
        <BlogArchiveCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}