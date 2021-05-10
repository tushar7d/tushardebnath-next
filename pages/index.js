import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import ReactRotatingText from "react-rotating-text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto ">
        <Header />

        <div className="prose  mt-12 mx-auto px-8 md:px-4">
          <h1 className="dark:text-white">Hello,I'm Tushar Debnath.</h1>
          <div className="dark:text-white text-2xl text-black font-bold ">
            I design{" "}
            <ReactRotatingText
              items={["products.", " custom tools.", "workflows.", "systems."]}
            />
          </div>

          <p className="dark:text-white">
            I am Currently helping millions order food online at Zomato. In the
            past I have worked with Expedia, Hike Messenger and MakeMyTrip
            building products at a global scale, developing design systems and
            internal tools.
          </p>
          <div className="flex">
            <Link href="/resume">
              <a className="mr-5 dark:text-white">Résumé</a>
            </Link>
            <a
              className="mr-5 dark:text-white"
              target="_blank"
              href="https://www.linkedin.com/in/tushardebnath/"
            >
              Linkedin
            </a>
            <a
              className="mr-5 dark:text-white"
              target="_blank"
              href="https://dribbble.com/tushardebnath"
            >
              Dribbble
            </a>
            <a
              className="mr-5 dark:text-white"
              target="_blank"
              href="https://github.com/tushar7d"
            >
              GitHub
            </a>
          </div>

          <h2 className="dark:text-white">Writing</h2>
          <div className="mb-3">
            <a
              className="text-l no-underline dark:text-white"
              target="_blank"
              href="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
            >
              How to run Figma shortcuts using Midi.
            </a>
          </div>
          <div className="mb-3">
            <a
              className="text-l no-underline dark:text-white"
              target="_blank"
              href="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
            >
              Automating our design system migration @ Expedia.
            </a>
          </div>
          <div>
            <a
              className="text-l no-underline dark:text-white"
              target="_blank"
              href="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
            >
              Better way to structure design files.
            </a>
          </div>

          <h2 className="dark:text-white">Figma Plugins</h2>
          <div className="mb-3">
            <a
              className="text-l no-underline dark:text-white"
              target="_blank"
              href="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
            >
              ColorKit
            </a>
          </div>
          <div className="mb-3">
            <a
              className="text-l no-underline dark:text-white"
              target="_blank"
              href="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
            >
              Project Scaffold
            </a>
          </div>
          <div className="pb-6">
            <a
              className="text-l no-underline dark:text-white"
              target="_blank"
              href="https://www.figma.com/community/plugin/745146759001708690/Cover-Generator"
            >
              Cover Generator
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
