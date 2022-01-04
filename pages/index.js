import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex-auto">
      <Head>
        <title>Tushar Debnath</title>
      </Head>

      <div className="z-50 p-2 mx-auto md:p-12">
        <div className="flex justify-center mb-4 ">
          <Image src="/td.png" width={200} height={200} loading="lazy" />
        </div>
        <div className="mb-2 font-serif text-4xl antialiased font-bold text-center md:text-5xl">
          Tushar Debnath
        </div>
        <div className="max-w-4xl mx-auto mb-3 text-xl antialiased font-medium leading-normal text-center text-gray-800 md:text-xl lg:text-2xl">
          Product Designer and Design Technologist fron New Delhi.
        </div>
        <div className="mx-auto mb-6 text-lg text-center text-gray-500 lg:w-2/3 ">
          {" "}
          A bit about me, I Love building digital products, design tools,
          workflows and design systems. Currently, I work at Zomato as senior
          product designer. When I am not designing or coding, you can find me
          reading fantasy books, working on my podcast, or travelling with my
          wife.
        </div>
        <div className="flex justify-center w-full mx-auto space-x-3 ">
          <button className="p-2 px-3 text-white bg-black rounded-md">
           View Work
          </button>
          <button className="p-2 px-3 text-black bg-gray-200 rounded-md">
            About me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
