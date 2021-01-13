import Card from "../components/Card";
import Container from "../components/Container";
import Intro from "../components/Cards/Intro";
import Grid from "../components/Grid";

export default function Home() {
  return (
    <Container title="tushar debnath">
      <Grid>
        <Card size="col-span-1 sm:col-span-2 " color="bg-gray-100">
          <Intro />
        </Card>
        <Card size="col-span-1 " color="bg-gray-100">
          <div className=" text-2xl text-left mt-2 ">Project</div>
          
        </Card>
      </Grid>
    </Container>
  );
}
