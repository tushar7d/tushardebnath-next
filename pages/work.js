import Head from "next/head";

export default function Work() {
  let Card = (props) => {
    return (
      <div>
        <div className="w-full flex justify-center items-end  h-80 bg-blue-50 mb-4 mt-8">
          <img className=" h-80 my-0 object-contain" src="/bgred.png"></img>
        </div>
        <div className="text-xl font-semibold dark:text-white">{props.title}</div>
        <div className=" text-gray-600 dark:text-white">{props.subtitle}</div>
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
            title="Improving the order tracking experience at Zomato"
            subtitle="A journal of steps taken towards simplicity and transparency in order tracking. "
          />
            <Card
            title="Helping users find the right rental car"
            subtitle="A case study detailing how we redesigned the car selection experience for the car rental business at Expedia . "
          />
            <Card
            title="Helping users find the right rental car"
            subtitle="A case study detailing how we redesigned the car selection experience for the car rental business at Expedia . "
          />
        </div>
      </div>
    </>
  );
}
