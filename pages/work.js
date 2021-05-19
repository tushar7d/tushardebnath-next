import Head from "next/head";

export default function Work() {
  let Card = (props) => {
    return (
      <div className="mb-14 ">
        
        <div className={`w-full  flex justify-center items-end  h-80 ${props.color} mb-4 `} >
          <img className="h-80 object-contain" src={props.img}></img>
        </div>
        <div className="text-xs text-gray-500 font-medium dark:text-white  mb-0.5">
          {props.type}
        </div>
        <div className="text-lg font-medium dark:text-white  mb-0.5 ">
          {props.title}
        </div>
        <div className=" text-sm text-gray-500 dark:text-white">
          {props.subtitle}
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Tushar Debnath | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container max-w-screen-md mx-auto  ">
        <div className="my-12 mx-auto px-8 md:px-4">
        <Card
          type="PRODUCT DESIGN"
            img="/grocery.png"
            color="bg-purple-50 dark:bg-blue-500"
            title="Launching grocery at Zomato"
            subtitle="A case study detailing how we launched the grocery purchase experience in record time"
          />
          <Card
          type="PRODUCT DESIGN"
            img="/crystal.png"
            color="bg-blue-50 dark:bg-blue-500"
            title="Improving order tracking experience at Zomato"
            subtitle="A journal of steps taken towards simplicity and transparency in order tracking. "
          />
          <Card
          type="DESIGN OPS"
            img="/cars.png"
            color="bg-yellow-50 dark:bg-yellow-500"
            title="Design Ops initiatives at Expedia"
            subtitle="An collection of design ops work done at expedia "
          />
          <Card
          type="PRODUCT DESIGN"
            img="/cars.png"
            color="bg-yellow-50 dark:bg-red-500"
            title="Helping users find the right rental car"
            subtitle="A case study detailing how we redesigned the car selection experience for the car rental business at Expedia . "
          />
          <Card
          type="PRODUCT DESIGN"
            img="/cars.png"
            color="bg-red-50 dark:bg-red-500"
            title="Making sending money simpler"
            subtitle="How we designed UPI based money transfer at Hike"
          />
          <Card
          type="PRODUCT DESIGN"
            img="/cars.png"
            color="bg-red-50 dark:bg-red-500"
            title="Better Search for Makemytrip"
            subtitle="Re-Imagining the mobile search user experience"
          />
           <Card
          type="PRODUCT DESIGN"
            img="/cars.png"
            color="bg-red-50 dark:bg-red-500"
            title="Post booking experience"
            subtitle="Optimized the post booking experiene to minimize support costs"
          />
        </div>
      </div>
    </>
  );
}
