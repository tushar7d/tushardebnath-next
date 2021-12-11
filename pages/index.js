import Head from "next/head";

const Home = () => {
  return (
    <div className="flex-auto">
      <Head>
        <title>Tushar Debnath</title>
      </Head>
      <div className="bg-black w-full h-60"></div>
      <div className="flex-auto mx-auto p-12  -m-40">
        
        <img src="./td.png" width={200} className="mx-auto mb-4" />
        <div className=" font-serif text-6xl text-center font-bold mb-2 antialiased text-gray-800">
          Tushar Debnath
        </div>

        <div className=" text-xl font-medium mx-24  text-center text-gray-800  leading-normal antialiased">
          Product Designer and Design Technologist.
        </div>
      </div>
    </div>
  );
};

export default Home;
