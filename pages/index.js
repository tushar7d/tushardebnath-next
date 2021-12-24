import Head from "next/head";

const Home = () => {
  return (
    <div className="flex-auto">
      <Head>
        <title>Tushar Debnath</title>
      </Head>

      <div className=" mx-auto p-2 md:p-12  z-50 ">
        <img src="./td.png" width={200} className="mx-auto mb-4 mt-6" />
        <div className=" font-serif text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-2 antialiased ">
          Tushar Debnath
        </div>

        <div className=" text-lg md:text-xl lg:text-2xl font-medium  text-center text-gray-800  leading-normal antialiased">
          Product Designer and Design Technologist.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-5xl mx-auto mt-12">
        <div className="bg-gray-500 h-12">hello</div>
        <div className="bg-gray-500 h-12">hello</div>
        <div className="bg-gray-500 h-12">hello</div>

        </div>
        
      </div>
    </div>
  );
};

export default Home;
