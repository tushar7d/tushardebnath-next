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
        <Card size="sm:col-span-2 p-4 " color="bg-gray-100">
          <Intro />
        </Card>

        <Card size="sm:col-span-2 md:col-span-1" color=" bg-gray-100" to="/work/crystal">
          <div>
          <div className="bg-blue-800 h-64 rounded-t-lg" />
          <div className="p-4 text-xl">Order Traking at Zomato</div>
          </div>

          
          

        </Card>


      </Grid>
    </Container>
  );
}
