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
          <div className="mb-2 text-lg font-semibold ">Hello Everbody!</div>
          <div className="space-y-2 text-gray-600">
            <p>
              I am Tushar a product designer and design technologist with over 8
              years of experience in building consumer products used by millions
              of people across the globe.
            </p>
            {/*
            <p>
              I am currently working at Revolut as a Senior product designer in
              the design operations and the expansion teams.
            </p>
            */}
          </div>
          <div className="py-2 mx-auto mt-5 w-[120px] text-sm text-center text-black border border-gray-600  rounded-full md:mx-0 ">
            Know more
          </div>
        </div>
      </div>
      <div className={"card p-0" }>
       
        <ul className="mt-1 text-sm divide-y space-y">
          <li className="p-4">About Me</li>
          <li className="p-4">Work</li>
          <li className="p-4">Writing</li>
          <li className="p-4">Podcast</li>
        </ul>
        
      </div>
      <div className={"card min-h-[300px]"}>Figma Conference</div>
      <div className={"card min-h-[300px]"}>Zomato project</div>
      <div className={"card min-h-[300px]"}>Expedia project</div>
      <div className={"card min-h-[300px]"}>Figma Conference</div>
      <div className={"card min-h-[300px]"}>Zomato project</div>
      <div className={"card min-h-[300px]"}>Expedia project</div>
     
      <div className={"card min-h-[350px]"}>Resume</div>
    
    </div>
  );
};

export default Home;
