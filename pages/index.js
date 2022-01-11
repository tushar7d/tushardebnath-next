import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <div className="p-12 max-w-prose mx-auto">
        <div className="text-6xl   font-serif mb-3 ">Hello</div>
        <div>
          I'm Tushar, a product designer and tech tinkerer, currently living in New 
          Delhi
          .I  am in my early 30s living with my wife, I've called six countries my home (including the
          US, the UK, Burundi and Germany), and have travelled to over fifty. I
          grew up bilingually, speaking English and German. My friends describe
          my accent as "confused international school kid", which yeah... <br />{" "}
          <br />
          When I'm not geeking out over grammar and punctuation (sexy stuff, I
          know), you'll either find me at the nearest pizza joint or en route to
          the airport . Because what could be better than pizza and adventure?{" "}
          <br /> <br />
          Some other things I love: the '80s, web design, corny horror films,
          rollercoasters, puppies, peanut butter , coffee, and sneakers
        </div>
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
