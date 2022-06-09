import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid md:grid-cols-2 ">
        <Bio />
        <Navigation />
      </div>
    </>
  );
}

let Bio = () => {
  return (
    <div className="col-span-1 md:h-screen p-14 ">
      <div className="flex items-center content-center justify-center w-12 h-12 mb-12 text-xl text-white bg-black rounded-full">
        TD
      </div>
      <h1 className="text-2xl font-medium leading-relaxed ">
        Hello, I’m Tushar Debnath a product designer and design technologist
        from New Delhi.
      </h1>
      <p className="mt-4 leading-relaxed text-gray-400">
        I specialize in building consumer products, design systems, workflows
        and design tools for fast moving product companies. I have over 8 years
        of experience working in a variety of industries such as Travel,
        HyperLocal and more recently FinTech.
      </p>
      <p className="mt-4 leading-relaxed text-gray-400">
        I am currently working with Revolut as a senior product designer,
        helping bring the Revolut App to the APAC region. Previously I have
        worked for Expedia, Zomato, MakeMyTrip and Hike Messenger.
      </p>
      <p className="mt-4 leading-relaxed text-gray-400">
        When I am not designing or tinkering with something new, you can find me
        listening to the alt rock from the 00s, watching obscure anime from the
        90s or obsessing over some fantasy book I am currently reading.
      </p>
    </div>
  );
};

let Navigation = () => {
  return <div className="col-span-1 bg-gray-50 md:h-screen p-14">two</div>;
};
