import Head from "next/head";
import Card from "../components/Card";
import Container from "../components/Container";
import Intro from "../components/Cards/Intro";
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
          <BlogList />{" "}
        </Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100">
          Plugin List
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/crystal"
        >
          Crystal
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/variants"
        >
          Variants
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/automation"
        >
          Design Automation
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/bluepackets"
        >
          Blue Packets
        </Card>
        <Card
          size="sm:col-span-2 md:col-span-1"
          color=" bg-gray-100"
          to="/work/searchexperience"
        >
          Search Experience
        </Card>
      </Grid>
    </Container>
  );
}

let BlogList = () => {
  return (
    <div className="h-full p-2">
      <div className=" text-2xl font-semibold mb-4">Writing</div>
      <div className="divide-y-2">
        <div className="my-4">
          <div className="  text-base font-medium mt-4 ">
            How to run Figma shortcuts using Midi.
          </div>
          <div className="  text-base font-normal text-gray-400 ">
            Medium Article
          </div>
        </div>
        <div className="my-4">
          <div className=" text-base  font-medium  mt-4">
            How I created a Figma plugin to automate our design system
            migration.
          </div>
          <div className="  text-base font-normal text-gray-400">
            Medium Article
          </div>
        </div>
        <div className="my-4">
          <div className=" text-base  font-medium mt-4">
            How structuring Figma files in a consistent way has improved
            collaboration and efficiency.
          </div>
          <div className="  text-base font-normal text-gray-400">
            Medium Article
          </div>
        </div>
      </div>
    </div>
  );
};
