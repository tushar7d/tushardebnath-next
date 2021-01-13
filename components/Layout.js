
import Container from "./Container";


export default function Layout(props) {
  return (
    <Container title={props.meta.title}>
      <div className="prose pt-12  w-5/6 m-auto">{props.children}</div>
    </Container>
  );
}
