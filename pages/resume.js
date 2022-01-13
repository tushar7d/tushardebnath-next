import Layout from "../components/Layout";


const Job = ({ name, role, tenure }) => {
  return (
    <div className="flex items-center justify-between w-full py-4 ">
      <div>
        <div className="mb-1 text-xl font-semibold">{name}</div>
        <div>{role}</div>
      </div>
      <div className="text-gray-500 tetx-sm">{tenure}</div>
    </div>
  );
};

const Resume = () => {
  return (
    <>
      <div className="p-8 mx-auto md:p-12 max-w-prose">
        
      <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
        <div className="mb-12 prose prose-lg ">
          <p className="text-justify">
            I'm Tushar a product designer and developer, from New Delhi. I build
            digital products, workflows, design tools and design systems. I am
            currently working at Zomato as a senior product designer.
          </p>
          <p className="text-justify">
            For the past 9 odd years I've worked with different teams applying
            human-centred design to challenges in Travel, Hyper Local, and
            Instant messaging.
          </p>
          <p className="text-justify">
            When I am not designing or coding, you can find me reading fantasy
            books, building Gundams, working on side projects, or travelling
            with my lovely wife.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Work Experience</h2>
          <div className="divide-y ">
            <Job
              name="Zomato"
              role="Senior Product Designer"
              tenure="2019 - current"
            />
            <Job
              name="Expedia"
              role="Senior Product Designer"
              tenure="2019 - current"
            />
            <Job
              name="Hike Messenger"
              role="Lead Product Designer"
              tenure="2019 - current"
            />
            <Job
              name="MakeMyTrip"
              role="Product Designer"
              tenure="2019 - current"
            />
            <Job
              name="Frog Walks Out"
              role="Designer"
              tenure="2019 - current"
            />
          </div>
        </div>
      </div>
    </>
  );
};
Resume.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Resume;
