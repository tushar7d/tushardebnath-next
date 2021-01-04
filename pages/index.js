import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Tushar App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container p-3 pt-10">
        <div
          class=" text-3xl font-bold text-left  "
          children={`Hello`}
        />
        <div
          class=" text-l font-regular text-left "
          children={`I am Tushar Debnath a product designer from New Delhi`}
        />
      </div>
    </div>
  );
}
