import LayoutSub from "../../components/LayoutSub";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Work = ({ posts }) => {
  return <LayoutSub bs="/work/" posts={posts} />;
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("work"));
  const filesr = files.reverse();
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

  return {
    props: {
      posts,
    },
  };
};

export default Work;
