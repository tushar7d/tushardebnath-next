import Layout from "../components/Layout";
import { getSanityContent } from "../utils/sanity";

const Home = ({data}) => {
  console.log({data})
  return (
    <>
      <div className="p-12 max-w-prose mx-auto">
        <div className="text-4xl   font-serif mb-3 ">Hello</div>
        <div className="text-xl leading-7 ">
          <p>I'm Tushar, a product designer and devloper, currently living in New 
          Delhi.</p>
          
          

           
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
      allSiteConfig {
       work
    `,
  });

 

  return {
    props: { data },
  };
}


export default Home;
