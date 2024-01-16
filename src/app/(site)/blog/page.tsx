import Link from "next/link";
import { getPosts } from "@/sanity/queries";
import type { PostSummaryType } from "@/sanity/types";

export default async function Blog() {
  const posts: PostSummaryType[] = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>
            <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <span>by {post.author.name}</span>
          <ul>
            {post.categories.map((category) => (
              <li key={category.title}>{category.title}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
