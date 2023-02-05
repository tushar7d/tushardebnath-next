import Link from "next/link";

const Tile = (props) => {
  return (
    <Link href={props.link} >
     
      <div className={" flex flex-col justify-between   card p-0   bg-gray-100  rounded-b-md"}>
      <div className=" rounded-t-md bg-[url('/zcov.png')] min-h-[240px] md:min-h-[180px]  bg-cover bg-no-repeat bg-center " />
        <div className="p-4">
          <div className="mb-1 text-xs text-gray-400">{props.type}</div>
          <div className="text-sm font-medium ">{props.heading}</div>
          
        </div>
       
        <div className="p-4 text-xs text-gray-400">{props.date}</div>
      </div>
    </Link>
  );
};

const Home = () => {
  return (
    <div className={"container"}>
      <div
        className={
          "card p-8 md:col-span-3 md:flex md:justify-between md:items-center"
        }
      >
        <div className="mb-4 md:mb-0 md:order-last">
          <img
            src="/pic.png"
            className="w-[200px] h-[200px] md:w-[180px] md:h-[180px]  mx-auto md:mx-0"
          />
        </div>

        <div className="flex flex-col text-center md:text-left md:w-2/3">
          <h1 className="mb-2 text-2xl font-semibold ">Tushar Debnath</h1>
          <div className="space-y-2 text-gray-600">
            <p>
              Product designer and design technologist with 8+ years of
              experience building products loved by millions of people across
              the globe.
            </p>
          </div>
          <div className="py-2 mx-auto mt-5 w-[120px] text-sm text-center text-black border border-gray-600  rounded-full md:mx-0 ">
            Know more
          </div>
        </div>
      </div>
      <div className={"card p-0"}>
        <ul className="mt-1 text-sm divide-y space-y">
          <li className="p-4">About Me</li>
          <li className="p-4">Work</li>
          <li className="p-4">Writing</li>
          <li className="p-4">Podcast</li>
        </ul>
      </div>
      
      <Tile
        date="12 AUG 2022"
        type="CASE STUDY"
        heading="Zomato order tracker"
        link="/"
      />
      <Tile
        date="12 AUG 2022"
        type="CASE STUDY"
        heading="Expedia car rental experience"
        link="/"
      />
      <Tile
        date="12 AUG 2022"
        type="FIGMA"
        heading="Color kit plugin"
        link="/"
      />

      
    </div>
  );
};

export default Home;
