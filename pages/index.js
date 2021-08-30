import Head from "next/head";
import IconSet from '../components/IconSet'
import Intro from '../components/Intro'
import Content from '../components/Content'


let AboutMe = () => {
  return (
    <div className="flex flex-col pb-12 justify-between p-4 md:px-12 md:h-screen md:w-1/2">
      <Intro />
      <IconSet />
    </div>
  );
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="max-h-screen m-auto md:overflow-hidden md:flex ">
        <AboutMe />
        <Content />
      </div>
    </>
  );
}
