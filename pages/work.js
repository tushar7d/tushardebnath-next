import Head from "next/head";
import WorkCard from '../components/WorkCard'
let projects = [
  {
      type: "PRODUCT DESIGN",
      title: "Launching market place at Zomato",
      subtitle: "A case study detailing how we launched the grocery purchase experience in record time",
      color: "card-red",
      img: "/grocery.png",
      link:"work/grocery",
  },
  {
      type: "PRODUCT DESIGN",
      title: "Improving order tracking experience at Zomato",
      subtitle: "A journal of steps taken towards simplicity and transparency in order tracking.",
      color: "card-yellow",
      img: "/crystal.png",
      link:"work/order-tracking"
  },
  
  {
      type: "PRODUCT DESIGN",
      img: "/cars.png",
      color: "card-blue",
      title: "Helping users find the right rental car",
      subtitle: "A case study detailing how we redesigned the car selection experience for the car rental business at Expedia . ",
      link:"work/car-rental"
  },
 
]

export default function Work() {
  
  return (
    <>
      <Head>
        <title>Tushar Debnath | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container max-w-screen-md mx-auto  ">
        <div className="my-12 mx-auto px-8 md:px-4">
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
