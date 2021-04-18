import Image from 'next/image'

let Intro = () => {
  let Container = (props) => (
    <div className=" h-full flex flex-col-reverse sm:flex-row ">
      {props.children}
    </div>
  );
  let Left = (props) => (
    <div className="flex flex-col sm:items-start justify-center w-full sm:w-2/3 ">
      {props.children}
    </div>
  );
  let Right = (props) => (
    <div className="flex justify-center w-full m-auto sm:w-1/3">
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
      <Image

        src="/photo.png"
        alt="Picture of the author"
        width={300}
       height={300}
       
      />
      </Right>
    </Container>
  );
};
export default Intro;
