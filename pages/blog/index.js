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


const Home = () => {
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
        img="./Key.png"
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
