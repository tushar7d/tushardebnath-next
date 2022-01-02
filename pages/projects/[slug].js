import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getSanityContent } from "../../utils/sanity";
import ProjectLayout from "../../components/ProjectLayout";
import Callout from "../../components/Callout";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import Link from "next/link";

const components = { Callout };

export default function TestPage({ source, po, img }) {
  return (
    <div className="flex flex-auto overflow-hidden md:h-screen">
      <div className="hidden lg:block">
        <ProjectLayout src="/projects/" projects={po} />
      </div>
      <article className="w-full max-w-6xl ] mx-auto overflow-scroll  scrollbar-hide">
        <Link href="/projects">
        <div className="flex items-center p-2 border-b">
          <button className="flex px-2 py-2 mr-2 text-sm text-gray-500 border rounded-md hover:bg-slate-200 hover:text-gray-900"><FaChevronLeft size={12} /> </button>
          Back
          </div>
        
        </Link>
       
        <div className="p-8">
          <img className="mb-8" src={img} />
          <div className="prose">
            <MDXRemote {...source} components={components} />
          </div>

          <a>Previous</a>
          <a>Next</a>
        </div>
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
  return { props: { source: mdxSource, po, img } };
}
