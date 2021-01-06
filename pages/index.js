import Card from "../components/Card";

export default function Home() {
  return (
    <div className=" max-w-screen-xl w-screen m-auto h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4 pt-12">
        <Card size="md:col-span-2" color="bg-muted-blue">
          <Intro />
        </Card>
        <Card size="xl:col-span-1" color="bg-muted-green">
          <Heading />
        </Card>
        <Card size="xl:col-span-1" color="bg-muted-red">
        <Heading />
        </Card>
        <Card size="xl:col-span-2" color="bg-muted-purple">
        <Heading />
        </Card>
        <Card size="xl:col-span-3" color="bg-muted-yellow">
        <Heading />
        </Card>
      </div>
    </div>
  );
}
let Intro = () => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-2 ">
      <div className="h-full md:col-span-2 flex flex-col   md:items-start p-3  pt-24">
        <div className="text-2xl text-center md:text-4xl xl:text-4xl  lg:text-left font-bold ">
        Hello, I am Tushar Debnath a Product Designer & Design Technologist 
        </div>
        <div className="text-xl  xl:text-xl text-gray-500 text-center lg:text-left mt-1">
          Product Designer, & Design Technologist
        </div>
        <button className="bg-white rounded-full px-6 py-2 mt-6 text-lg ">
          Know more
        </button>
      </div>

      <div className="h-full flex justify-center  items-center ">
        <div className=" bg-white  w-full h-full opacity-20 " />
      </div>
    </div>
  );
}; 

let Heading = () => {
  return <div className="h-full p-3">
    <h1 className=" text-center sm:text-left text-2xl  font-semibold">
      Figma Plugin
    </h1>
    <div className="text-gray-500 text-center sm:text-left">
      A few figma plugin I have been working on.
    </div>

  </div>;
};
