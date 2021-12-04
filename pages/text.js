import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import matter from "gray-matter";





export default function TestPage({ source, frontMatter }) {
  return (
    <div className="wrapper">
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source}  />
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `---
title: Test
--------

Some **mdx** text, with a component 
  `;

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return { props: { source: mdxSource, frontMatter: data } };
}