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
      <div className={"card min-h-[300px]"}>Revolut Snap</div>
      <div className={"card min-h-[300px]"}>Revolut Plugins</div>
      <div className={"card min-h-[300px]"}>Revolut Expansion</div>
      <div className={"card min-h-[300px]"}>Figma Conference</div>
      <div className={"card min-h-[300px] flex flex-col justify-between "}>
        <div>
          <div className="text-xs">AUGUST 2021</div>
        </div>
        <div>
          <div className="mb-1 text-xs">CASE STUDY</div>
          <div className="font-medium">
            Redesigning Zomato's order tracker
          </div>
        </div>
      </div>
      <div className={"card min-h-[300px] flex flex-col justify-between "}>
        <div>
          <div className="text-xs">JANUARY 2020</div>
        </div>
        <div>
          <div className="mb-1 text-xs">CASE STUDY</div>
          <div className="font-medium ">
            Helping Expedia users find the right rental car
          </div>
        </div>
      </div>
      <div className={"card min-h-[300px]"}>Color kit</div>
      <div className={"card min-h-[300px]"}>Medium article</div>
      <div className={"card min-h-[300px]"}>Medium article</div>
      <div className={"card min-h-[300px]"}>Medium article</div>
    </div>
  );
};

export default Home;
