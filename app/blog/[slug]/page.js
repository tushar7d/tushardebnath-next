import { MDXRemote } from "next-mdx-remote/rsc";

import { promises as fs } from "fs";

import path from "path";

export async function generateStaticParams() {
  return [{ slug: "one" }, { slug: "two" }];
}

async function getPost(params) {
  const mdxDirectory = path.join(process.cwd(), "app/blog/mdx/");
  const res = await fs.readFile(mdxDirectory + params.slug + ".mdx", "utf8");

  return res;
}

export default async function Page({ params }) {
  const data = await getPost(params);
  return (
    <>
      <div className=" max-w-[1000px] mx-auto w-full prose pt-12 px-6">
        <MDXRemote source={data}   />
      </div>
    </>
  );
}
