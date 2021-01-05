import Image from "next/image";

export default function Home() {
  return (
    <div className="p-3 h-screen flex flex-col justify-top items-top ">
      <Image src="/logo.png" alt="me" width="60" height="60" />
      <div className=" text-2xl mt-4 ">
        I am Tushar Debnath, a product designer & design technologist living in
        New Delhi.
      </div>
      
    </div>
  );
}
