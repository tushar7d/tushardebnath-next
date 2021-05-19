import Head from "next/head";
import WorkCard from '../components/WorkCard'
import {projects} from "../data";

export default function Work() {
  
  return (
    <>
      <Head>
        <title>Tushar Debnath | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container max-w-screen-md mx-auto  ">
        <div className="my-12 mx-auto px-8 md:px-4">
          {projects.map((p) => (
            <WorkCard
              img={p.img}
              color={p.color}
              title={p.title}
              subtitle={p.subtitle}
            />
          ))}
        </div>
      </div>
    </>
  );
}
