let Intro = () => {
  let Container = (props) => (
    <div className="h-full grid grid-cols-1 gap-1 sm:grid-cols-3">
      {props.children}
    </div>
  );
  let Left = (props) => (
    <div className="h-full flex flex-col p-3 sm:col-span-2 justify-center sm:items-start">
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
        <div className="text-2xl text-center font-bold sm:text-3xl  md:text-4xl xl:text-4xl sm:text-left  ">
          Hello, I am Tushar Debnath a Product Designer & Design Technologist
        </div>
        <div className="text-xl  xl:text-xl text-gray-500 text-center   sm:text-left mt-1">
          I am currently living in New Delhi and working at Zomato
        </div>
        <button className="bg-white rounded-full px-6 py-2 mt-6 text-lg hover:shadow sm:shadow-md ">
          Know more
        </button>
      </Left>

      <Right>
        <div className=" bg-white  w-full h-full opacity-20 " />
      </Right>
    </Container>
  );
};
export default Intro;
