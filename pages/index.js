const Home = () => {
  let card = "p-8 mt-4 mx-3 md:mx-0  md:mt-0  bg-gray-100 rounded-xl";
  let container =
    "max-w-[1000px] px-3 mx-auto my-3 md:gap-3  md:grid md:grid-cols-4 mt-12  ";

  return (
    <div className={container}>
      <div
        className={
          card + " md:col-span-3 md:flex md:justify-between md:items-center"
        }
      >
        <div className="mb-4 md:mb-0 md:order-last">
          <img
            src="/pic.png"
            className="w-[200px] h-[200px] md:w-[180px] md:h-[180px]  mx-auto md:mx-0"
          />
        </div>

        <div className="flex flex-col text-center md:text-left md:w-2/3">
          <div className="mb-2 text-2xl font-semibold ">Hello Everbody!</div>
          <div className="space-y-2 text-gray-500">
            <p>
              I am Tushar a product designer and design technologist with over 8
              years of experience in building consumer products used by millions
              of people across the globe.
            </p>
            <p>
              I am currently working at Revolut as a Senior product designer in
              the design operations and the expansion teams.
            </p>
          </div>
          <div className="p-3 mx-auto mt-5 w-[120px] text-sm text-center text-white bg-black rounded-full md:mx-0 ">
            Know more
          </div>
        </div>
      </div>
      <div className={card + " md:col-span-1"}>Featured</div>
      <div className={card}>Blog</div>
      <div className={card}>Podcast</div>
      <div className={card}>About Me</div>
      <div className={card}>Resume</div>
    </div>
  );
};

export default Home;
