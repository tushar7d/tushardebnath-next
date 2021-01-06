import Card from "../components/Card";

export default function Home() {
  return (
    <div className=" max-w-screen-xl w-screen m-auto h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4 pt-12">
        <Card size="xl:col-span-2" color="bg-muted-blue">
          <Intro />
        </Card>
        <Card size="xl:col-span-1" color="bg-muted-green">
          hello
        </Card>
        <Card size="xl:col-span-1" color="bg-muted-red">
          red
        </Card>
        <Card size="xl:col-span-2" color="bg-muted-purple">
          purple
        </Card>
        <Card size="xl:col-span-3" color="bg-muted-yellow">
          hello
        </Card>
      </div>
    </div>
  );
}
let Intro = () => {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-2 ">
      <div className="h-full lg:col-span-2 flex flex-col justify-center items-center  lg:items-start p-3 ">
        <div className="text-3xl text-center md:text-4xl xl:text-5xl  lg:text-left font-serif ">
          Tushar Debnath
        </div>
        <div className="text-xl  xl:text-2xl text-gray-500 text-center lg:text-left">
          Product Designer, & Design Technologist 
        </div>
      </div>

      <div className="h-full flex justify-center items-center " >

    <div className=" bg-white  w-36 h-36 rounded-full" />
      </div>
    </div>
  );
};
