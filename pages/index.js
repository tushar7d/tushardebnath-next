import Layout from "../components/Layout";
import { getSanityContent } from "../utils/sanity";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Home = ({ mdxSource }) => {
  return (
    <>
      <div className="p-12 max-w-prose mx-auto">
        <div className="text-4xl   font-serif mb-3 ">Hello</div>

        <div className="prose pros-2xl">
          <MDXRemote {...mdxSource} />
        </div>
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
