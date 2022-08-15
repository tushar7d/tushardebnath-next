import Head from "next/head";

export default function Zomato() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
      </Head>
      <header>
        <div className="w-full h-[90vh]">
            

        </div>
        <div className="w-full grid grid-cols-6 min-h-[10vh] space-x-3  bg-gray-100">
            <div className="grid grid-cols-6 col-span-3">
            <div className="col-span-2 p-8 ">Type: Case Study</div>
            <div className="col-span-2 p-8 ">Company: Zomato</div>
            <div className="col-span-2 p-8 ">Year: 2021</div>
            </div>

            
        </div>
      </header>
    </>
  );
}
