import Layout from "../components/Layout";

const Home = ({ mdxSource }) => {
  return (
    <>
      <div className="p-12 mx-auto prose prose-lg max-w-prose">
        <h1>Hello</h1>
        <p>
          I'm Tushar, a product designer and developer, from New Delhi. I build
          digital products,design tools, workflows and design systems. I am
          currently working at Zomato as a senior product designer.
        </p>
        <p>
          For the past 9 odd years I've worked with teams applying human-centred
          design to challenges in Travel, Hyper Local, and Instant messaging.
        </p>
        <p>
          When I am not designing or coding, you can find me reading fantasy
          books, working on my cool side projects, or travelling with my wife.
        </p>
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
