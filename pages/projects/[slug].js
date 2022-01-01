import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getSanityContent } from "../../utils/sanity";
import ProjectLayout from '../../components/ProjectLayout';

import Callout from "../../components/Callout";

const components = { Callout };

export default function TestPage({ source, po }) {
 

  return (
    <div className="flex flex-auto md:h-screen overflow-hidden">
      <div className="hidden lg:block">
        <ProjectLayout src="/projects/" pages={po} />
      </div>
      <article className="mdx">
        <MDXRemote {...source} components={components} />
      <a>Previous</a>
      <a>Next</a>
      </article>
     

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
  const datad = await getSanityContent({
    query: `
    query AllProject {
      allProject(sort: [{ order: ASC }]) {
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

  const po = datad.allProject.map((page) => ({
    title: page.title,
    slug: page.slug.current,
    date: page.publishDate,
    sub: page.sub,
  }));

  const source = data.allProject[0].content;

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, po } };
}
