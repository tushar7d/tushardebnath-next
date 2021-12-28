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
      query AllPages {
        allPage {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages = data.allPage;

  return {
    paths: pages.map((p) => `/sanity/${p.slug.current}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  
  const data = await getSanityContent({
    query: `
      query PageBySlug($slug: String!) {
        allPage(where: { slug: { current: { eq: $slug } } }) {
          title
          content
      }
     }
    `,
    variables: {
            slug: context.params.slug,
           },
      
  });

 
  
  const source = data.allPage[0].content;
 
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
