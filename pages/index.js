import Head from "next/head";
import Card from "../components/Card";
import Container from "../components/Container";
import Intro from "../components/Cards/Intro";
import BlogList from "../components/Cards/BlogList";
import PluginList from "../components/Cards/PluginList";
import Grid from "../components/Grid";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>{"Tushar Debnath"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid>
        <Card size="sm:col-span-2 " color="bg-gray-100">
          <Intro />
        </Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100">
          <BlogList />
        </Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100">
          <PluginList />
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/crystal"
        >
          <div className="h-full p-2 overflow-y-hidden">
            <div className=" text-2xl font-semibold mb-4">Crystal</div>
          </div>
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/variants"
        >
          <div className="h-full p-2 overflow-y-hidden">
            <div className=" text-2xl font-semibold mb-4">Variants</div>
          </div>
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/automation"
        >
          <div className="h-full p-2 overflow-y-hidden">
            <div className=" text-2xl font-semibold mb-4">
              Design Automation
            </div>
          </div>
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/bluepackets"
        >
          <div className="h-full p-2 overflow-y-hidden">
            <div className=" text-2xl font-semibold mb-4">Blue Packets</div>
          </div>
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/searchexperience"
        >
          <div className="h-full p-2 overflow-y-hidden">
            <div className=" text-2xl font-semibold mb-4">
              Search Experience
            </div>
          </div>
        </Card>
      </Grid>
    </Container>
  );
}
