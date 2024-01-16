import { groq } from "next-sanity";
import client from "./client";

export async function getPosts() {
  return await client.fetch(groq`
    *[_type == "post"]{
      title,
      "slug": slug.current,
      author->{
        name,
        "slug": slug.current,
      },
      "categories": *[_type == "category"]{
        title,
        description,
      }
    }
  `);
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      author->{
        name,
        "slug": slug.current,
      },
      body,
      "categories": *[_type == "category"]{
        title,
        description,
      }
    }
  `,
    { slug }
  );
}
