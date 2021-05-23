import Head from "next/head";
import { projects } from "../../components/data";
import ProjectSummary from "../../components/ProjectSummary";
import ProjectHeader from "../../components/ProjectHeader";
export default function CarRental() {
  let project = projects[2];

  return (
    <>
      <Head>
        <title>Tushar Debnath | Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container max-w-screen-md mx-auto ">
        <div className="px-8 mx-auto my-12 md:px-4">
          <ProjectHeader
            type={project.type}
            title={project.title}
            date={project.date}
            color={project.color}
            img={project.img}
          />
          <ProjectSummary
            problem={project.problem}
            solution={project.solution}
            role={project.role}
          />

          <div className="mt-4 prose max-w-prose">
            <h3>Details</h3>
          </div>
        </div>
      </div>
    </>
  );
}
