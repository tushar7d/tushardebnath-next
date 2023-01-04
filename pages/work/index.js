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
        type="CASE STUDY"
        heading="Zomato order tracking"
        link="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
        img="./Zomato.png"
        ext
      />
      <Tile
        date="12 AUG 2022"
        type="CASE STUDY"
        heading="Expedia car rental"
        link="https://tushardebnath.notion.site/Helping-users-find-the-right-car-4140d01adf3343dc98249fdb91d643e2"
        img="./Expedia.png"
        ext
      />

      
    </div>
  );
};


export default Home;
