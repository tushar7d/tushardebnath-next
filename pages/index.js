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
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" >Blog List</Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" >Plugin List</Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" to="/work/crystal">Crystal</Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" to="/work/variants">Variants</Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" to="/work/automation">Design Automation</Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" to="/work/bluepackets">Blue Packets</Card>
        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" to="/work/searchexperience">Search Experience</Card>

      </Grid>
    </Container>
  );
}
