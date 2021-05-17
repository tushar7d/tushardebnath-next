import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Tushar Debnath | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container mx-auto ">
        <div className="prose  my-12 mx-auto px-8 md:px-4">
          <h1 className="dark:text-white">About</h1>
          <p></p>
        </div>
      </div>
    </>
  );
}
