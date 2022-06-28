import Head from "next/head";


export default function Page() {
  return (
    <>
      <Head>
        <title>Zomato</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="grid lg:grid-cols-2 ">
        <Bio />
        <Navigation />
      </div>
    </>
  );
}