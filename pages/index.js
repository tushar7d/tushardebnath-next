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

const Home = () => {
  return (
    <>
      <div className=" grid xl:grid-cols-2 gap-10 h-screen">
        <div className="p-12 border-r">
          <img src="/td.png" className="w-[200px] mt- mx-auto" />

          <div className="text-xl mb-2 mt-12  text-gray-400 ">INTRO </div>

          <div className=" text-4xl font-semibold mb-6 ">
            Hello I am Tushar a product designer and developer from New Delhi.
          </div>
          <div className="text-xl tracking-wide  text-gray-500 text-justify">
            For the past 9 odd years I've worked with different teams applying
            human-centred design to challenges in Travel, Hyper Local, and
            Instant messaging. When I am not designing or coding, you can find
            me reading fantasy books, building Gundams, working on side
            projects, or travelling with my lovely wife.
          </div>
        </div>

        <div className="mt-12 p-12">
          <div className="text-2xl mb-2 text-gray-400 ">EXPERIENCE </div>

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
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
