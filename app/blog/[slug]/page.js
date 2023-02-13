import { MDXRemote } from "next-mdx-remote/rsc";

import { promises as fs } from "fs";
import path from "path";

async function listDir(path) {
  try {
    return await fs.readdir(path);
  } catch (err) {
    console.error("Error occurred while reading directory!", err);
  }
}

export async function generateStaticParams() {
  const mdxDirectory = path.join(process.cwd(), "app/blog/mdx/");
  let list = await listDir(mdxDirectory);
  let out = list.map((o) => {
    return { slug: o.replace(".mdx", "") };
  });
  return out;
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
      <div className=" max-w-[1000px] mx-auto w-full prose py-12 px-6 overflow-scroll scrollbar-hide">
        <MDXRemote source={data} />
      </div>
    </>
  );
}
