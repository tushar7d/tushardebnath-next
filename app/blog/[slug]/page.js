import { MDXRemote } from "next-mdx-remote/rsc";

import { createClient } from "next-sanity";


  async function getData(params) {
    const client = createClient({
        projectId: "uvu14ce6",
        dataset: "production",
        apiVersion: "2023-03-07",
        useCdn: false
      });
    const res = await client.fetch(`*[_type == "blog" && slug.current == "${params.slug}" ]`);
 
    return res;
  }


export default async function Page({ params }) {
 
  let data = await getData(params)
  
  return (
    <>
      <div className=" max-w-[1000px] mx-auto w-full prose py-12 px-6 overflow-scroll scrollbar-hide">
      <MDXRemote source={data[0].content} />
      </div>
    </>
  );
}
