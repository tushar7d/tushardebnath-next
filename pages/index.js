import Image from "next/image";

export default function Home() {
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
    <div className="container mx-auto max-w-6xl mt-12">
      <Container>
        <Left>
          <div className=" text-center  text-3xl  sm:text-left  mb-8 mt-2   leading-10   ">
            Hey I'm Tushar 👋
          </div>
          <div className="text-xl   text-gray-600 text-center    sm:text-left mt-1 leading-8 mb-3">
            I'm a product designer and a design technologist. Currently helping
            millions order food online at Zomato. 
            <br />
            <br />
            In the past I have worked with
            Expedia, Hike Messenger and MakeMyTrip building products at a global
            scale and helping to build design systems and developing internal
            design tools.
          </div>
          
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
      <div className="mx-4 mt-8">
        <div className="mb-4">
        <h1 className="text-2xl">
          Recent Writing
        </h1>
        </div>

        <h1 className="text-2xl">Select Projects</h1>
      </div>
    </div>
  );
}
