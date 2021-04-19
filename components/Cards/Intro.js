import Image from "next/image";

let Intro = () => {
  let Container = (props) => (
    <div className=" h-full flex flex-col-reverse sm:flex-row  ">
      {props.children}
    </div>
  );
  let Left = (props) => (
    <div className="flex flex-col sm:items-start justify-center w-full sm:w-2/3 sm:ml-4 ">
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
        <div className="font-bold text-center  text-3xl  sm:text-left  mb-2 mt-2  leading-10   ">
          Hey I'm Tushar 👋
        </div>
        <div className="text-l   text-gray-500 text-center   sm:text-left mt-1 leading-6">
          I'm a product designer and a design technologist. Currently helping millions order food online
          at Zomato. 
          <br />
          <br />
          In the past I have worked with Expedia, Hike Messenger and MakeMyTrip building products at 
          a global scale and helping to build design systems and developing internal design tools, process and.
          <br />
          <br />
          I am a big beliver in community learning and opensource and I actively work on opensource projects and do my part in giving back to this awesome community. </div>
        <div className="text-blue-800 my-3 font-semibold">Know More</div>
      </Left>

      <Right>
        <Image
          src="/photo.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </Right>
    </Container>
  );
};
export default Intro;
