import Head from "next/head";

export default function grocery() {
  return (
    <>
      <Head>
        <title>Tushar Debnath | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container   max-w-screen-md mx-auto  ">

            <div className="my-12 mx-auto px-8 md:px-4">
                <div className="text-sm text-gray-500 font-medium dark:text-white  mb-0.5">
                    PRODUCT DESIGN
                </div>
                <div className="text-2xl font-medium dark:text-white  mb-0.5 ">
                    Launching grocery at Zomato
                </div>
                <div className=" text-ms text-gray-500 dark:text-white mb-8">
                    A case study detailing how we launched the grocery purchase
                    experience in record time
                </div>

                <div
                    className={`w-full  flex justify-center items-end  h-80 bg-red-50 mb-4 `}
                >
                    <img className="h-80 object-contain" src="/grocery.png"></img>
                </div>

                <div className="border border-gray-200 rounded divide-y md:divide-y-0 md:flex md:divide-x divide-gray-300">
                    <div className="p-4 md:w-1/3">
                        
                        <h3 className="text-xs text-gray-400 font-medium dark:text-white mb-1">PROBLEM</h3>
                        <p className="text-sm text-gray-800 dark:text-white">The spread of online misinformation is too large to tackle with centralized tools.</p>
                    </div>
                    <div className="p-4  md:w-1/3">
                        <h3 className="text-xs text-gray-400 font-medium dark:text-white mb-1">SOLUTION</h3>
                        <p className="text-sm text-gray-800 dark:text-white"> test</p>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <h3 className="text-xs text-gray-400 font-medium dark:text-white mb-1">MY ROLE</h3>
                        <p className="text-sm text-gray-800 dark:text-white"> test</p>
                    </div>

                </div>
                <div className="max-w-prose mt-4">
                    <h4>Details</h4>
                </div>

            </div>

      </div>
    </>
  );
}
