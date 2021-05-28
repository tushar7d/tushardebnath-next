import Head from "next/head";

export default function OrderTracking() {
  return (
    <>
      <Head>
        <title>Tushar Debnath | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container max-w-screen-md mx-auto ">
        <div className="px-8 mx-auto my-12 md:px-4">
          <div className="justify-between mb-8 md:flex">
            <div>
              <div className="text-sm text-gray-500 font-medium dark:text-white  mb-0.5">
                PRODUCT DESIGN
              </div>
              <div className="text-2xl font-medium dark:text-white  mb-0.5 ">
              Improving order tracking experience at Zomato
              </div>
              
            </div>
            <div className="text-gray-500 text-md dark:text-white">
              19 May 2021
            </div>
          </div>
          <div
            className={`w-full  flex justify-center items-end  h-80 bg-purple-50 dark:bg-purple-500  mb-8 `}
          >
            <img className="object-contain h-80" src="/grocery.png"></img>
          </div>

          <div className="border border-gray-200 divide-y divide-gray-300 rounded md:divide-y-0 md:flex md:divide-x">
            <div className="p-4 md:w-1/3">
              <h3 className="mb-1 text-xs font-medium text-gray-400 dark:text-white">
                PROBLEM
              </h3>
              <p className="text-sm text-gray-800 dark:text-white">
                The spread of online misinformation is too large to tackle with
                centralized tools.
              </p>
            </div>
            <div className="p-4 md:w-1/3">
              <h3 className="mb-1 text-xs font-medium text-gray-400 dark:text-white">
                SOLUTION
              </h3>
              <p className="text-sm text-gray-800 dark:text-white"> test</p>
            </div>
            <div className="p-4 md:w-1/3">
              <h3 className="mb-1 text-xs font-medium text-gray-400 dark:text-white">
                MY ROLE
              </h3>
              <p className="text-sm text-gray-800 dark:text-white"> test</p>
            </div>
          </div>
          <div className="mt-4 max-w-prose">
            <h4>Details</h4>
          </div>
        </div>
      </div>
    </>
  );
}
