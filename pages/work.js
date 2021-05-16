import Head from "next/head";

export default function Work() {
  let Card = (props) => {
    return (
      <div className="mb-14">
        <div className="w-full flex justify-center items-end  h-80 bg-blue-50 mb-4 ">
          <img className="h-80 object-contain" src={props.img}></img>
        </div>
        <div className="text-lg font-medium dark:text-white mb-1">
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

      <div className="container max-w-prose mx-auto  ">
        <div className="my-12 mx-auto px-8 md:px-4">
          <Card
            img="/crystal.png"
            title="Improving the order tracking at Zomato"
            subtitle="A journal of steps taken towards simplicity and transparency in order tracking. "
          />
          <Card
            img="/cars.png"
            title="Helping users find the right rental car"
            subtitle="A case study detailing how we redesigned the car selection experience for the car rental business at Expedia . "
          />
        </div>
      </div>
    </>
  );
}
