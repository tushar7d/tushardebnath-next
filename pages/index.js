let card = "mt-4 mx-3 md:mx-0  md:mt-0  bg-gray-50 rounded-xl ";
let container =
  "max-w-[1000px] px-3 mx-auto my-3 md:gap-3 sm:grid-cols-3  md:grid md:grid-cols-4 mt-12  ";

const Intro = () => {
  return (
    <div
      className={
        card + " md:col-span-3 md:flex md:justify-between md:items-center p-6"
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
          <p>
            I am currently working at Revolut as a Senior product designer in
            the design operations and the expansion teams.
          </p>
        </div>
        <div className="py-2 mx-auto mt-5 w-[120px] text-sm text-center text-black border border-gray-600  rounded-full md:mx-0 ">
          Know more
        </div>
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div className={card + " md:col-span-1 p-4"}>
      <div className="mb-3 font-semibold "> Social Links</div>
      <div className="">
        <ul className="space-y-2 text-sm text-gray-600">
        <li>Figma</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Dribbble</li>
          
        </ul>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className={container}>
      <Intro />
      <Links />
      
    </div>
  );
};

export default Home;
