import ReactRotatingText from "react-rotating-text";

let Intro = () => {
    return (
      <div className="md:mt-24" >
        
        <img src="/td.png" alt="Me" style={{ maxWidth: "150px" }} />
  
        <h1 className="mt-6 mb-2 text-3xl font-semibold md:font-medium md:text-5xl dark:text-white">Hello, I'm Tushar Debnath</h1>
       
        
        <div className="flex mt-2">
          <div className="mr-1 text-2xl font-medium dark:text-white">
            I design{" "}
          </div>
          <div className="text-2xl font-medium text-yellow-500 ">
            <ReactRotatingText
              items={[" products.", " custom tools.", " workflows.", " systems."]}
            />
          </div>
        </div>
  
        <p className="my-4 text-lg text-gray-500">
          Currently, I work at Zomato and I have previously worked for Expedia, Hike Messenger and . When I am not designing or coding,
          you can find me reading fantasy books, working on my podcast, or
          travelling with my wife.
        </p>
      </div>
    );
  };
  export default Intro