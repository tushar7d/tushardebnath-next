import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LayoutSub from "../../components/LayoutSub";

const PostPage = ({ frontMatter: { title, date }, mdxSource, posts }) => {
  return (
    <div className="flex flex-auto h-screen overflow-hidden">
      <div className="hidden lg:block"><LayoutSub bs="/work/" posts={posts} /></div>
      
      <div className="  flex-auto ">
      <article className="p-4 mt-2 md:p-12 md:mt-5 max-w-prose mx-auto prose overflow-scroll scrollbar-hide">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <MDXRemote {...mdxSource} />
      </article>

      </div>
      
    </div>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("work"));
  const filesr = files.reverse();
  const paths = filesr.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const files = fs.readdirSync(path.join("work"));
  const filesr = files.reverse();
  const markdownWithMeta = fs.readFileSync(
    path.join("work", slug + ".mdx"),
    "utf-8"
  );

  const posts = filesr.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("work", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      posts,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
