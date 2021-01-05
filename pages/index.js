import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tushar Debbnath</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex w-screen">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

let LeftSection = () => (
  <div className="md:w-3/12 p-2 h-screen bg-red-100">
    <div>Tushar Debnath</div>
  </div>
);
let RightSection = () => <div className="md:w-9/12 p-2  h-screen">Right</div>;
