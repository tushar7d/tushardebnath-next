import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getSanityContent } from "../../utils/sanity";
import SubLayout from "../../components/BlogLayout";

import Callout from "../../components/Callout";

const components = { Callout };

export default function TestPage({ source, po }) {
  return (
    <div className="flex flex-auto overflow-hidden md:h-screen">
      <div className="hidden lg:block">
        <SubLayout src="/writing/" pages={po} />
      </div>
      <article className="mdx">
        <MDXRemote {...source} components={components} />
      </article>
    </div>
  );
}
export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllWriting {
        allWriting {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages = data.allWriting;

  return {
    paths: pages.map((p) => `/writing/${p.slug.current}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getSanityContent({
    query: `
      query ProjectBySlug($slug: String!) {
        allWriting(where: { slug: { current: { eq: $slug } } }) {
          title
          content
      }
     }
    `,
    variables: {
      slug: context.params.slug,
    },
  });
  const datad = await getSanityContent({
    query: `
    query AllWriting {
      allWriting {
        publishDate
        title
        sub
        slug {
          current
        }
        content
      }
    }
    `,
  });

  const po = datad.allWriting.map((page) => ({
    title: page.title,
    slug: page.slug.current,
    date: page.publishDate,
    sub: page.sub,
  }));

  const source = data.allWriting[0].content;

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, po } };
}
