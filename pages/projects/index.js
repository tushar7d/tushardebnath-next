import Tile from '../../components/tile'
import Head from "next/head";



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
       <Tile
        date="12 AUG 2022"
        type="FIGMA PLUGIN"
        heading="Color kit plugin"
        link="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
        img="./colors.png"
        ext
      />

      <Tile
        date="12 AUG 2022"
        type="FIGMA PLUGIN"
        heading="Project Scaffold"
        link="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
        img="./scaffold.png"
        ext
      />

      
    </div>
  );
};


export default Home;
