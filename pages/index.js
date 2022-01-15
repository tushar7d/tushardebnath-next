import Layout from '../components/Layout'

const Job = ({ name, role, tenure }) => {
  return (
    <div className="flex items-center justify-between w-full py-4 ">
      <div>
        <div className="mb-1 text-xl font-semibold">{name}</div>
        <div>{role}</div>
      </div>
      <div className="text-gray-500 tetx-sm">{tenure}</div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="grid h-screen  xl:relative xl:overflow-hidden xl:grid-cols-2 ">
      <div className="px-12 pt-12 border-r xl:overflow-scroll ">
        <img src="/td.png" className="w-[200px]  mx-auto" />
        <div className="max-w-prose mx-auto">
          <div className="mt-12 mb-2 text-xl text-gray-400 ">INTRO </div>

          <div className="mb-6 text-4xl font-semibold ">
            Hello I am Tushar a product designer and developer from New Delhi.
          </div>
          <p className="text-xl tracking-wide text-justify text-gray-500 mb-4">
            For the past 9 odd years I've worked with different teams applying
            human-centred design to challenges in Travel, Hyper Local, and
            Instant messaging.
          </p>
          <p className="text-xl tracking-wide text-justify text-gray-500">
            When I am not designing or coding, you can find me reading fantasy
            books, building Gundams, working on side projects, or travelling
            with my lovely wife.
          </p>
        </div>
      </div>

      <div className="p-8 xl:overflow-scroll ">
        <div className="mb-2 text-2xl text-gray-400 xl:mt-12 ">EXPERIENCE </div>

        <div className="divide-y max-w-prose mx-auto ">
          <Job
            name="Zomato"
            role="Senior Product Designer"
            tenure="2020 - current"
          />
          <Job name="Expedia" role="Product Designer II" tenure="2018 - 2020" />
          <Job
            name="Hike Messenger"
            role="Lead Product Designer"
            tenure="2018 - 2018"
          />
          <Job name="MakeMyTrip" role="Product Designer" tenure="2016 - 2018" />
          <Job name="Frog Walks Out" role="Web Designer" tenure="2014 - 2015" />
        </div>

        <div className="mt-12 mb-2 text-2xl text-gray-400 ">EDUCATION</div>

        <div className="divide-y max-w-prose mx-auto ">
          <Job
            name="Bachelors in Technology (I.T)"
            role="I.T.S Engineering College"
            tenure="2010 - 2014"
          />
          <Job
            name="Senior Secondary School"
            role="I.V.P.School"
            tenure="2008 - 20010"
          />
          <Job
            name="Secondary School"
            role="G.N.F.C.School"
            tenure="2007 - 2008"
          />
        </div>
      </div>
    </div>
  )
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home
