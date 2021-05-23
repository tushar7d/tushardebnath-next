import Head from "next/head";
import { projects } from "../../components/data";
import ProjectSummary from "../../components/ProjectSummary";
export default function CarRental() {
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
                {projects[2].type}
              </div>
              <div className="text-2xl font-medium dark:text-white  mb-0.5 ">
                {projects[2].title}
              </div>
            </div>
            <div className="text-gray-500 text-md dark:text-white">
              {projects[2].date}
            </div>
          </div>
          <div
            className={`w-full  flex justify-center items-end  h-80 bg-purple-50 dark:bg-purple-500  mb-8 `}
          >
            <img className="object-contain h-80" src="/grocery.png"></img>
          </div>
          <ProjectSummary
            problem="The spread of online misinformation is too large to tackle with
          centralized tools."
            solution="sol"
            role="role"
          />

          <div className="mt-4 max-w-prose">
            <h4>Details</h4>
          </div>
        </div>
      </div>
    </>
  );
}
