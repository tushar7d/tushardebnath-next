import Link from "next/link";

const Tile = (props) => {
  return (
    <Link href={props.link} target={props.ext ? "_blank" : "_self"}>
      <div
        className={
          "flex sm:flex-col justify-between card md:h-[210px]"
        }
      >
        <div className="w-1/3 sm:w-full">
          {" "}
          <img src={props.img} className="w-20 md:w-16" />
        </div>

        <div className="w-2/3 md:w-full">
          <div className="mb-1 text-xs ">{props.type}</div>
          <div className="mb-1 text-sm font-medium ">{props.heading}</div>
          <div className="mb-1 text-xs ">{props.date}</div>
        </div>
      </div>
    </Link>
  );
};

const Home = () => {
  return (
    <div className={"container"}>
      <div
        className={
          "card p-8 sm:col-span-2 md:col-span-3 md:flex md:justify-between md:items-center"
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
        link="/work/zomato-order-tracker"
        img="./Zomato.png"
      />
      <Tile
        date="12 AUG 2022"
        type="CASE STUDY"
        heading="Expedia car rental experience"
        link="/work/expedia-rental-car"
        img="./Expedia.png"
      />
      <Tile
        date="12 AUG 2022"
        type="FIGMA"
        heading="Color kit plugin"
        link="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
        img="./colors.png"
        ext
      />

      <Tile
        date="12 AUG 2022"
        type="FIGMA"
        heading="Project Scaffold"
        link="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
        img="./scaffold.png"
        ext
      />
      <Tile
        date="12 AUG 2022"
        type="MEDIUM"
        heading="Automating our design system migration"
        link="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
        img="./dsauto.png"
        ext
      />
      <Tile
        date="12 AUG 2022"
        type="MEDIUM"
        heading="Figma shortcut using MIDI"
        link="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
        img="./key.png"
        ext
      />
      <Tile
        date="12 AUG 2022"
        type="MEDIUM"
        heading="Consistent file stucture = better collaboration"
        link="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
        img="./struct.png"
        ext
      />
    </div>
  );
};

export default Home;
