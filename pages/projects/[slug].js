import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getSanityContent } from "../../utils/sanity";
import ProjectLayout from "../../components/ProjectLayout";
import Callout from "../../components/Callout";

const components = { Callout };

export default function TestPage({ source, po,img }) {
  return (
    <div className="flex flex-auto overflow-hidden md:h-screen">
      <div className="hidden lg:block">
        <ProjectLayout src="/projects/" projects={po} />
      </div>
      <article className="mdx">
        <img src={img} />
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
          content
          banner{
            asset{
              url
            }
          }
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
      allProject {
       pname
        type
        desc
        org 
        badge{
          asset{
            url
          }
        }
        
        slug {
          current
        }
        content
      }
    }
    `,
  });

  const po = datad.allProject.map((prjkt) => ({
    title: prjkt.pname,
    slug: prjkt.slug.current,
    sub: prjkt.desc,
    badge: prjkt.badge.asset.url,
    type: prjkt.type,
  }));

  const source = data.allProject[0].content;
  const img = data.allProject[0].banner.asset.url;

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, po,img } };
}
