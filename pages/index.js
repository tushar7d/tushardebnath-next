import Card from "../components/Card";

export default function Home() {
  return (
    <div className=" max-w-screen-xl w-screen m-auto h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4 pt-12">
        <Card size="sm:col-span-2 md:col-span-2" color="bg-muted-blue">
          <Intro />
        </Card>
        <Card size="xl:col-span-1" color="bg-muted-green">
          <Heading head="Figma Plugin" sub="A few cool plugins I built from scratch" />
        </Card>
        <Card size="xl:col-span-1" color="bg-muted-red">
        <Heading head="Figma Plugin" sub="A few cool plugins I built from scratch" />
        </Card>
        <Card size="xl:col-span-2" color="bg-muted-purple">
        <Heading head="Figma Plugin" sub="A few cool plugins I built from scratch" />
        </Card>
        <Card size="xl:col-span-3" color="bg-muted-yellow">
        <Heading  head="Figma Plugin" sub="A few cool plugins I built from scratch" />
        </Card>
      </div>
    </div>
  );
}
let Intro = () => {
  return (
    <div className="h-full grid grid-cols-1   sm:grid-cols-3 gap-1 ">
      <div className="h-full sm:col-span-2 flex flex-col   md:items-start p-3 sm:pt-16  md:pt-24">
        <div className="text-2xl  sm:text-2xl  md:text-4xl xl:text-4xl text-center  sm:text-left font-bold ">
        Hello, I am Tushar Debnath a Product Designer & Design Technologist 
        </div>
        <div className="text-xl  xl:text-xl text-gray-500 text-center   sm:text-left mt-1">
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

let Heading = (props) => {
  return <div className="h-full p-3">
    <h1 className="  text-2xl  font-semibold">
      {props.head}
    </h1>
    <div className="text-gray-500 ">
      {props.sub}
    </div>

  </div>;
};
