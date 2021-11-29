import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="">
        <header class="sticky top-0 z-50 w-screen px-8 py-4 bg-white shadow">
          <div class="flex items-center justify-between px-4 mx-auto">
            <div class="text-3xl font-semibold">Debnath.</div>
            <nav class="grid grid-flow-col gap-8 text-lg font-medium">
              <a href="/">Home</a>
              <a>Work</a>
              <a>About</a>
              <a>Resume</a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
