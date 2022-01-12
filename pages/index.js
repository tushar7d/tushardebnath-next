import Layout from "../components/Layout";

const Home = ({ mdxSource }) => {
  return (
    <>
      <div className="p-8 mx-auto prose prose-lg md:p-12 max-w-prose">
        <img src="/td.png" className="w-[200px] mx-auto" /> 
        <p>
          Hello, I'm Tushar, a product designer and developer, from New Delhi. I build
          digital products,design tools, workflows and design systems. I am
          currently working at Zomato as a senior product designer.
        </p>
        <p>
          For the past 9 odd years I've worked with teams applying human-centred
          design to challenges in Travel, Hyper Local, and Instant messaging.
        </p>
        <p>
          When I am not designing or coding, you can find me reading fantasy
          books, building Gundams, working on side projects, or travelling with my lovely wife.
        </p>
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
