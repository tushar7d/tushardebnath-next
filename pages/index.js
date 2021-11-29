import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
        <header className="sticky top-0 z-50 w-screen px-8 py-4 bg-white shadow">
          <div className="flex items-center justify-between px-4 mx-auto">
            <div className="text-3xl font-semibold">TD</div>
            <nav className="grid grid-flow-col gap-8 text-lg font-medium">
              <a href="/">Home</a>
              <a>Work</a>
              <a>About</a>
              <a>Resume</a>
            </nav>
          </div>
        </header>
        <main>
          <section className="w-full flex justify-center items-center  pt-80"> 
          
          <h1 className="font-black text-6xl">Hello, Everyone</h1></section>

        </main>
      
    </>
  );
}
