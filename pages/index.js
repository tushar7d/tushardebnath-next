import Layout from "../components/Layout";
import { getSanityContent } from "../utils/sanity";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Home = ({ mdxSource }) => {
  return (
    <>
      <div className="p-12 prose prose-base max-w-prose mx-auto">
        <MDXRemote {...mdxSource} />
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllSiteconfig {
      allSiteconfig{
       content
      }
      }
    `,
  });

  const mdxSource = await serialize(data.allSiteconfig[1].content);

  return {
    props: { mdxSource },
  };
}

export default Home;
