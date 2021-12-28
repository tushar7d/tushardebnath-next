import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getSanityContent } from "../../utils/sanity";

import Callout from "../../components/Callout";

const components = { Callout };

export default function TestPage({ source }) {
  return (
    <div className="prose max-w-prose mx-auto mt-4">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllProject {
        allProject {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages = data.allProject;

  return {
    paths: pages.map((p) => `/projects/${p.slug.current}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getSanityContent({
    query: `
      query ProjectBySlug($slug: String!) {
        allProject(where: { slug: { current: { eq: $slug } } }) {
          title
          content
      }
     }
    `,
    variables: {
      slug: context.params.slug,
    },
  });

  const source = data.allProject[0].content;

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
