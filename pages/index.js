import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
    <div className="absolute top-0 w-full p-4 bg-red-50">Absolute</div>
    <div className="p-8 mt-12 md:mt-0 md:p-12 lg:p-24">
      <img src="/td.png" className="w-[200px] md:w-[250px] mb-12 mx-auto sm:mx-0" />
      <div className="mb-2 text-4xl font-medium md:text-left md:text-4xl">Hi, I'm Tushar.</div>

      <div className="mb-4 text-3xl font-extrabold sm:text-4xl md:mb-6 md:text-6xl md:text-left ">
        A product designer and developer from New Delhi.
      </div>

      <div className="text-2xl font-light md:text-left ">
        I build digital products, custom design tools, workflows and design
        systems. For the past 8 years I've worked with teams applying
        human-centred design to the challenges in Travel, Hyper Local, and
        Personal Communication.
      </div>
    </div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
