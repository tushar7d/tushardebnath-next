import ReactRotatingText from "react-rotating-text";

let Intro = () => {
  return (
    <div className="mt-12 ">
      <img src="/td.png" alt="Me" style={{ maxWidth: "180px" }} />

      <h1 className="mt-8 mb-2 text-4xl font-semibold md:mb-3 md:font-medium md:text-4xl lg:text-4xl dark:text-white">
        Hello, I'm Tushar Debnath
      </h1>

      <div className="flex mt-2">
        <div className="mr-1 text-2xl font-medium lg:text-4xl dark:text-white">
          I build {" "}
        </div>
        <div className="text-2xl font-medium text-yellow-500 lg:text-4xl">
          <ReactRotatingText
            items={[" products.", " custom tools.", " workflows.", " systems."]}
          />
        </div>
      </div>

      
      <p className="pb-3 my-4 text-xl text-gray-500">
        For the past 9 odd years I've worked with different teams applying
        human-centred design to challenges in Travel, Hyper Local, and Instant
        messaging.
      </p>
      <p className="pb-3 my-4 text-xl text-gray-500">
        When I am not designing or coding, you can find me reading fantasy
        books, working on side projects, or travelling with my lovely wife.
      </p>
    </div>
  );
};
export default Intro;
