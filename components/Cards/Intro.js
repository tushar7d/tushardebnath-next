let Intro = () => {
  let Container = (props) => (
    <div className="h-full grid grid-cols-1 gap-1 sm:grid-cols-4">
      {props.children}
    </div>
  );
  let Left = (props) => (
    <div className="h-full flex flex-col p-3 sm:col-span-3 justify-center sm:items-start">
      {props.children}
    </div>
  );
  let Right = (props) => (
    <div className="h-full flex justify-center items-center ">
      {props.children}
    </div>
  );

  return (
    <Container>
      <Left>
        <div className="text-2xl text-center font-bold sm:text-xl  md:text-3xl  sm:text-left  ">
          Hello, I am Tushar Debnath a Product Designer & Design Technologist
        </div>
        <div className=" text-lg  text-gray-500 text-center   sm:text-left mt-2">
          I am currently living in New Delhi and working at Zomato
        </div>
        <button className="mt-2 text-lg text-blue-500  ">
          Know more
        </button>
      </Left>

      <Right>
        <div className=" bg-gray-300  w-1/2  h-1/2" />
      </Right>
    </Container>
  );
};
export default Intro;
