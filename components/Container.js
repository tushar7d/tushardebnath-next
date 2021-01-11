import Head from "next/head";
export default function Container(props) {
  return (
    <div className=" max-w-screen-xl w-screen m-auto ">
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      {props.children}
    </div>
  );
}
