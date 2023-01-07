import Link from "next/link";
import Head from "next/head";

const Tile = (props) => {
  return (
    <Link href={props.link} target={props.ext ? "_blank" : "_self"}>
      <div className={"flex sm:flex-col justify-between card md:h-[240px] "}>
        <div className="w-1/4 sm:w-full">
          {" "}
          <img src={props.img} className="w-20 md:w-16 " />
        </div>

        <div className="w-3/4 sm:w-full">
          <div className="mb-1 text-xs tracking-widest text-gray-400">
            {props.type}
          </div>
          <div className="mb-1 font-medium ">{props.heading}</div>
        </div>
      </div>
    </Link>
  );
};


const Projects = () => {
  return (
    <div className={"container"}>
     
      <Head>
        <title>Tushar Debnath</title>
        <meta property="og:title" content="Tushar Debnath" />
        <meta property="og:site_name" content="Tushar Debnath" />
        <meta property="og:url" content="https://tushardebnath.com" />
        <meta property="og:image" content="https://tushardebnath.com/og.png" />
        <meta
          property="og:description"
          content="Product designer and developer from New Delhi"
        />
        <meta property="og:type" content="website" />
      </Head>
      
    
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

      
    </div>
  );
};


export default Projects;
