import { PortableText } from "@portabletext/react";
import { getPostBySlug } from "@/sanity/queries";
import type { PostType } from "@/sanity/types";

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostProps) {
  const { slug } = params;
  const post: PostType = await getPostBySlug(slug);

  return (
    <article key={post.slug}>
      <h2>{post.title}</h2>
      <span>by {post.author.name}</span>
      <PortableText value={post.body} />
      <ul>
        {post.categories.map((category) => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>
    </article>
  );
}
