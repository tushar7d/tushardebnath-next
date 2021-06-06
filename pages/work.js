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

      <div >
        <div >
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
