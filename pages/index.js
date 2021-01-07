import Card from "../components/Card";
import Container from "../components/Container";
import Intro from "../components/Cards/Intro";
import Grid from "../components/Grid";
export default function Home() {
  return (
    <Container>
      <Grid>
        <Card size="sm:col-span-2 md:col-span-3" color="bg-muted-blue">
          <Intro />
        </Card>
      </Grid>
    </Container>
  );
}
