import Layout from "../components/Layout";
import Ticker from "react-ticker";

const Home = () => {
  return (
    <div className="p-8 mt-12 md:mt-0 md:p-12 lg:p-24">
      <img src="/td.png" className="w-[250px] mb-12" />
      <div className="mb-2 text-4xl font-medium">Hi, I'm Tushar.</div>
      <div className="mb-6 text-6xl font-extrabold">
        A product designer and developer from New Delhi.
      </div>
      <div className="text-xl">
        I build digital products, custom design tools, workflows and design
        systems. For the past 8 years I've worked with teams applying human-centred
        design to the challenges in Travel, Hyper Local, and Personal Communication.
      </div>
    </div>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home
