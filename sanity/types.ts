export type AuthorType = {
  name: string;
  slug: string;
};

export type CategoryType = {
  title: string;
  description: string;
};

export type ChildrenType = {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
};

export type BodyType = {
  _key: string;
  markDefs: string[];
  children: ChildrenType[];
  _type: string;
  style: string;
};

export type PostSummaryType = {
  title: string;
  slug: string;
  author: AuthorType;
  categories: CategoryType[];
};

export type PostType = PostSummaryType & {
  body: BodyType[];
};
