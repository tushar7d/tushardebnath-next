
import Container from "./Container";
import NavBar from '../components/NavBar'

export default function Layout(props) {
  return (
    <Container title={props.meta.title}>
      <NavBar />
      <div className="prose pt-12  w-5/6 m-auto">{props.children}</div>
    </Container>
  );
}
