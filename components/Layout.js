import Head from 'next/head'

export default function 
Layout(props) {
    return (
      <div
        className={` container m-auto  bg-red-50 w-screen h-screen`}
      >
          <Head>
        <title>{props.meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        {props.children}
      </div>
    );
  }
  