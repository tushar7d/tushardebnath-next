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
        <div className="text-lg antialiased leading-normal text-center text-gray-500 md:text-xl lg:text-2xl">
          Product Designer and Design Technologist fron New Delhi.
        </div>
        <div className="max-w-5xl p-4 mx-auto mt-4 ">
        <div className="p-4 mb-3 bg-indigo-100 rounded-xl">
            <h1 className="text-xl font-medium">About me</h1>
            <p>heloo this is awesome</p>
          </div>
          <div className="p-4 mb-3 bg-green-100 rounded-xl">
            <h1 className="text-xl font-medium">Experience</h1>
            <p>heloo this is awesome</p>
          </div>
          <div className="p-4 mb-3 bg-orange-100 rounded-xl">
            <h1 className="text-xl font-medium">Skills</h1>
            <p>heloo this is awesome</p>
          </div>
          <div className="p-4 mb-3 bg-yellow-100 rounded-xl">
            <h1 className="text-xl font-medium">Education</h1>
            <p>heloo this is awesome</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
