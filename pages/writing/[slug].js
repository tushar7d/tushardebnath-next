import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { getSanityContent } from "../../utils/sanity";
import Link from "next/link";
import SubLayout from "../../components/BlogLayout";

import Callout from "../../components/Callout";

const components = { Callout };

export default function TestPage({ source, po }) {
  
  return (
    <div className="flex flex-auto overflow-hidden md:h-screen">
      <div className="hidden lg:block">
        <SubLayout src="/writing/" pages={po} />
      </div>

      <article className="w-full max-w-[850px] mx-auto overflow-scroll scrollbar-hide">
        <Link href="/writing">
          <div className="flex items-center p-2 border-b lg:hidden">
            <button className="flex px-2 py-2 mr-2 text-sm text-gray-500 border rounded-md hover:bg-slate-200 hover:text-gray-900">
              <FaChevronLeft size={12} />
            </button>
            Back
          </div>
        </Link>

        <div className="p-8">
          
          <div className="prose max-w-none">
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
      allWriting(sort: [{ order: ASC }]) {
        title
         sub
         tags
         publishDate 
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

  const po = datad.allWriting.map((page) => ({
    title: page.title,
    slug: page.slug.current,
    date: page.publishDate,
    desc: page.sub,
    badge: page.badge.asset.url,
  }));

  const source = data.allWriting[0].content;

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, po } };
}
