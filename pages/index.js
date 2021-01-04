import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tushar Debbnath</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container p-1 max-w-full pt-16  h-screen bg-red-100">
        <div className="text-center text-l font-normal mb-1 text-gray-700">
          Hello👋 , I am
        </div>
        <div className="text-center text-4xl  font-semibold">তুষার দেবনাথ</div>
        <div className="container max-w-full p-12">
          <div className="rounded bg-white shadow-sm w-full p-4 mb-2">
            About
          </div>
          <div className="rounded bg-white shadow-sm w-full p-4 mb-2">Work</div>
        </div>
      </div>
    </div>
  );
}
