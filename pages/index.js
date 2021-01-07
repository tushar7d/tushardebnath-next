import Card from "../components/Card";
import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4 pt-12">
        <Card size="sm:col-span-2 md:col-span-3" color="bg-muted-blue">
          <Intro />
        </Card>
       
       
      </div>
    </Container>
  );
}
let Intro = () => {
  return (
    <div className="h-full grid grid-cols-1 gap-1 sm:grid-cols-3">
      <div className="h-full flex flex-col p-3 sm:col-span-2 justify-center sm:items-start  ">
        <div className="text-2xl text-center font-bold sm:text-3xl  md:text-4xl xl:text-4xl   sm:text-left  ">
          Hello, I am Tushar Debnath a Product Designer & Design Technologist
        </div>
        <div className="text-xl  xl:text-xl text-gray-500 text-center   sm:text-left mt-1">
          Product Designer, & Design Technologist
        </div>
        <button className="bg-white rounded-full px-6 py-2 mt-6 text-lg hover:shadow sm:shadow-md ">
          Know more
        </button>
      </div>

      <div className="h-full flex justify-center items-center ">
        <div className=" bg-white  w-full h-full opacity-20 " />
      </div>
    </div>
  );
};

let Heading = (props) => {
  return (
    <div className=" p-3">
      <h1 className="  text-2xl  font-semibold">{props.head}</h1>
      <div className="text-gray-500 ">{props.sub}</div>
    </div>
  );
};

let ListItem = (props) => {
  return (
   
      
      <div className="pl-3">
      <div className="text-lg  ">A sample title</div>
      <div className="text-md text-gray-500 mb-4">Link</div>
      </div>
      
     
    
  );
};
