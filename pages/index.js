import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex-auto">
      <Head>
        <title>Tushar Debnath</title>
      </Head>

      <div className=" mx-auto p-2 md:p-12  z-50 ">
        <div className=" flex justify-center mb-4 ">
          <Image src="/td.png" width={200} height={200} loading="lazy" />
        </div>
        <div className=" font-serif text-4xl md:text-5xl  text-center font-bold mb-2 antialiased ">
          Tushar Debnath
        </div>
        <div className=" text-lg md:text-xl lg:text-2xl  text-center text-gray-500  leading-normal antialiased">
          Product Designer and Design Technologist fron New Delhi.
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2  gap-3 max-w-5xl mx-auto mt-4 p-4">
          <div className="p-4 bg-indigo-100 rounded-xl">
            <h1 className="text-xl font-medium">Work</h1>
            <p>heloo this is awesome</p>
          </div>
          <div className="p-4 bg-indigo-100 rounded-xl">
            <h1 className="text-xl font-medium">Skills</h1>
            <p>heloo this is awesome</p>
          </div>
          <div className="p-4 bg-indigo-100 rounded-xl">
            <h1 className="text-xl font-medium">Education</h1>
            <p>heloo this is awesome</p>
          </div>
          <div className="p-4 bg-indigo-100 rounded-xl">
            <h1 className="text-xl font-medium">About me</h1>
            <p>heloo this is awesome</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
