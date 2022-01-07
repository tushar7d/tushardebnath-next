import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getSanityContent } from "../../utils/sanity";
import ProjectLayout from "../../components/ProjectLayout";
import Callout from "../../components/Callout";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import Link from "next/link";
import Layout from '../../components/Layout'
import Stepper from '../../components/Stepper'

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const CollapsedBackButton = () =>{
  return(
    <Link href="/projects">
          <div className="flex items-center p-2 border-b lg:hidden">
            <button className="flex px-2 py-2 mr-2 text-sm text-gray-500 border rounded-md hover:bg-slate-200 hover:text-gray-900">
              <FaChevronLeft size={12} />
            </button>
            Back
          </div>
    </Link>

    
  )
}





const components = { Callout };

export default function Index({ source, po, img, order, count }) {
  return (
    <div className="project-container">
      <div className="sidebar-container">
        <ProjectLayout src="/projects/" projects={po} />
      </div>

      <div className="project-content-container">
        
       <CollapsedBackButton />

        <div className="p-8 ">
          <img className="mb-8 w-[850px] md:mx-auto " src={img} />
          <div className="prose  md:max-w-[850px]  md:mx-auto ">
            <MDXRemote {...source} components={components} />
          </div>

          <Stepper dest="/projects/" po={po} order={order} count={count} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllProject {
        allProject(sort: [{ order: ASC }]) {
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
          order
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
      allProject(sort: [{ order: ASC }]) {
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
  const order = data.allProject[0].order;
  const count = datad.allProject.length - 1;

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, po, img, order, count } };
}
