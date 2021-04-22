import Head from "next/head";
import Container from "./Container";

export default function Layout(props) {
  return (
    <Container>
      <Head>
        <title>{props.meta ? props.meta.title :"TD"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="prose  m-auto">{props.children}</div>
    </Container>
  );
}
