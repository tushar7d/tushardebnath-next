import ReactRotatingText from "react-rotating-text";

let Intro = () => {
    return (
      <div className="mt-12 " >
        
        <img src="/td.png" alt="Me" style={{ maxWidth: "180px" }} />
  
        <h1 className="mt-8 mb-2 text-5xl font-semibold md:font-medium md:text-4xl lg:text-6xl dark:text-white">Hello, I'm Tushar Debnath</h1>
       
        
        <div className="flex mt-2">
          <div className="mr-1 text-2xl font-medium lg:text-4xl dark:text-white">
            I design{" "}
          </div>
          <div className="text-2xl font-medium text-yellow-500 lg:text-4xl ">
            <ReactRotatingText
              items={[" products.", " custom tools.", " workflows.", " systems."]}
            />
          </div>
        </div>
  
        <p className="my-4 text-lg text-gray-500">
          Currently, I work at Zomato as senior product designer. When I am not designing or coding,
          you can find me reading fantasy books, working on my podcast, or
          travelling with my wife.
        </p>
      </div>
    );
  };
  export default Intro