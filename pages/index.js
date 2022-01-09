import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

const Home = () => {
  
  const sub =
    "max-w-4xl mx-auto mb-3 text-xl antialiased font-medium leading-normal text-center text-gray-800 md:text-xl lg:text-2xl";
  return (
    <div className="flex-auto ">
      <Head>
        <title>Tushar Debnath</title>
      </Head>

      <div className="z-50 max-w-4xl p-4 mx-auto md:p-12">
        <div className="flex justify-center mb-4 ">
          <Image src="/td.png" width={200} height={200} loading="lazy" />
        </div>
        <div className="mb-2 font-serif text-4xl antialiased font-bold text-center md:text-5xl">
          Tushar Debnath
        </div>
        <div className={sub}>
          Product Designer and Design Technologist fron New Delhi.
        </div>

  
      </div>
    </div>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
