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
      <div className="p-8 w-full mx-auto md:p-12 max-w-prose mt-12">
        <img src="/td.png" className="w-[200px] mx-auto" />
        
      <h2 className="mb-2 text-4xl font-serif text-center font-semibold my-4">Tushar Debnath</h2>
        
          <p className="text-justify ">
            I'm Tushar a product designer and developer, from New Delhi. I build
            digital products, workflows, design tools and design systems.
          </p>
          <p className="text-justify mb-2">
            For the past 9 odd years I've worked with different teams applying
            human-centred design to challenges in Travel, Hyper Local, and
            Instant messaging.
          </p>
          <p className="text-justify mb-2">
            When I am not designing or coding, you can find me reading fantasy
            books, building Gundams, working on side projects, or travelling
            with my lovely wife.
          </p>
        </div>
        
    
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
