import Link from "next/link";

const Tile = (props) => {
  return (
    <Link href={props.link} target={props.ext ? "_blank" : "_self"}>
      <div className={"flex sm:flex-col justify-between card md:h-[240px]"}>
        <div className="w-1/4 sm:w-full">
          {" "}
          <img src={props.img} className="w-20 md:w-16" />
        </div>

        <div className="w-3/4 sm:w-full">
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
       <div className="p-6 sm:col-span-2 md:col-span-3 lg:col-span-4 card min-h-fit">
      nav bar
      </div>
     
      <div
        className={
          "card p-8 sm:col-span-2 md:col-span-3 md:flex md:justify-between md:items-center "
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
              the globe.I am currently working at Revolut as a Senior product designer.

            </p>
           
          </div>
          
        </div>
      </div>


      
     

      <Tile
        date="19 MAY 2022"
        type="CONFRENCE"
        heading="Config 2022: Design to prouction in a snap"
        link="https://www.youtube.com/watch?v=FhXXEM1_aP4&t=55s&ab_channel=Figma"
        img="./config.png"
        ext
      />

      <Tile
        date="12 AUG 2022"
        type="CASE STUDY"
        heading="Zomato order tracker"
        link="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
        img="./Zomato.png"
        ext
      />
      <Tile
        date="12 AUG 2022"
        type="CASE STUDY"
        heading="Expedia car rental experience"
        link="https://tushardebnath.notion.site/Helping-users-find-the-right-car-4140d01adf3343dc98249fdb91d643e2"
        img="./Expedia.png"
        ext
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
