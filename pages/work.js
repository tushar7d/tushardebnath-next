import Head from "next/head";
import WorkCard from '../components/WorkCard'
import {projects} from '../components/data'

export default function Work() {
  
  return (
    <>
      <Head>
        <title>Tushar Debnath | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container max-w-screen-md mx-auto ">
        <div className="px-8 mx-auto my-12 md:px-4">
          <h1 className="mb-12 hp-title">
              Work
          </h1>
          {projects.map((p,index) => (
           
           <div key={index}> 
            <WorkCard
           
              img={p.img}
              color={p.color}
              title={p.title}
              subtitle={p.subtitle}
              link={p.link}
              
            />
            </div>
            
           
          ))}
        </div>
      </div>
    </>
  );
}
