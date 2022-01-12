import Layout from "../components/Layout";

let Job = ({name, role, tenure})=>{
  return(
    <div className="flex items-center justify-between w-full py-4 ">
    <div>
      <div className="mb-1 text-xl font-semibold">{name}</div>
      <div>{role}</div>
    </div>
    <div className="text-gray-500 tetx-sm">{tenure}</div>
  </div>
  )
}

const Home = ({ mdxSource }) => {
  return (
    <>
      <div className="p-8 mx-auto md:p-12 max-w-prose">
        <img src="/td.png" className="w-[200px] mx-auto mb-4" />
        <div className="mb-8 prose prose-lg">
          <p>
            Hello, I'm Tushar, a product designer and developer, from New Delhi.
             I build digital products, design tools, workflows and design
            systems. I am currently working at Zomato as a senior product
            designer.
          </p>
          <p>
            For the past 9 odd years I've worked with teams applying
            human-centred design to challenges in Travel, Hyper Local, and
            Instant messaging.
          </p>
          <p>
            When I am not designing or coding, you can find me reading fantasy
            books, building Gundams, working on side projects, or travelling
            with my lovely wife.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xl">Work Experience</h2>
          <div className="divide-y ">
          <Job name="Zomato" role="Senior Product Designer" tenure="2019 - current" />
          <Job name="Expedia" role="Senior Product Designer" tenure="2019 - current" />
          <Job name="Hike Messenger" role="Lead Product Designer" tenure="2019 - current" />
          <Job name="MakeMyTrip" role="Product Designer" tenure="2019 - current" />
          <Job name="Frog Walks Out" role="Designer" tenure="2019 - current" />

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
