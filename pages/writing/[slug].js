import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LayoutSub from "../../components/LayoutSub";

const PostPage = ({ frontMatter: { title, date }, mdxSource, posts }) => {
  return (
    <div className="flex flex-auto  h-screen overflow-hidden">
      <LayoutSub bs="/writing/" posts={posts} />
      
      <article className="p-12 mt-5 max-w-prose mx-auto prose overflow-scroll scrollbar-hide">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <MDXRemote {...mdxSource} />
      </article>
      
    </div>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("blog"));

  const paths = files.map((filename) => ({
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
  const files = fs.readdirSync(path.join("blog"));

  const markdownWithMeta = fs.readFileSync(
    path.join("blog", slug + ".mdx"),
    "utf-8"
  );

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("blog", filename),
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