import Head from "next/head";

import ReactRotatingText from "react-rotating-text";
import { faLinkedin, faDribbbleSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className=" prose max-w-prose mx-auto  mt-12 px-8 md:px-4  ">
      <img
          src="/td.png"
          alt="Picture of the Me"
          style={{ maxWidth: "150px" }}
        />
         <h1 className=" dark:text-white  ">Hello, I'm Tushar Debnath. </h1>
        
       
        <div className="flex">
        <div className="text-2xl mr-1 dark:text-white">I design </div>
        <div className=" text-2xl text-yellow-500  font-medium ">

          
            <ReactRotatingText 
            items={[" products.", " custom tools.", " workflows.", " systems."]}
          />
        </div>
        </div>

        <p className=" text-gray-500 dark:text-white">
          I am currently helping millions order food online at Zomato. In the
          past I have worked with Expedia, Hike Messenger and MakeMyTrip
          building products at a global scale, developing design systems and
          internal tools.
          </p>

        <div className="flex text-3xl ">

          <a
            className="mr-5 dark:text-white no-underline "
            target="_blank"
            href="https://www.linkedin.com/in/tushardebnath/"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-700 dark:text-white  hover:text-yellow-500 dark:hover:text-yellow-500" />
          </a>
          <a
            className="mr-5 dark:text-white"
            target="_blank"
            href="https://dribbble.com/tushardebnath"
          >
            <FontAwesomeIcon icon={faDribbbleSquare} className="text-gray-700 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500" />
          </a>
          <a
            className="mr-5 dark:text-white"
            target="_blank"
            href="https://github.com/tushar7d"
          >
            <FontAwesomeIcon icon={faGithubSquare} className="text-gray-700 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500" />
          </a>
        </div>
        <h3 className="dark:text-white text-yellow-400">Writing</h3>
        <div className="mb-3">
          <a
            className="text-l no-underline text-gray-500 dark:text-white"
            target="_blank"
            href="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
          >
            How to run Figma shortcuts using Midi.
            </a>
        </div>
        <div className="mb-3">
          <a
            className="text-l no-underline text-gray-500 dark:text-white"
            target="_blank"
            href="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
          >
            Automating our design system migration @ Expedia.
            </a>
        </div>
        <div>
          <a
            className="text-l no-underline text-gray-500 dark:text-white"
            target="_blank"
            href="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
          >
            Better way to structure design files.
            </a>
        </div>
        <h3 className="dark:text-white">Figma Plugins</h3>
        <div className="mb-3">
            <a
              className="text-l no-underline text-gray-500 dark:text-white"
              target="_blank"
              href="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
            >
              
              <div className=" text-gray-800 dark:text-white hover:text-blue-800">ColorKit</div>
              
            </a>
          </div>

          <div className="mb-3">
            <a
              className="text-l no-underline text-gray-500 dark:text-white"
              target="_blank"
              href="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
            >
               <div className=" text-gray-800 dark:text-white hover:text-blue-800">Project Scaffold</div>
              
            </a>
          </div>
          <div className="pb-6">
            <a
              className="text-l no-underline dark:text-white"
              target="_blank"
              href="https://www.figma.com/community/plugin/745146759001708690/Cover-Generator"
            >
              <div className=" text-gray-800 dark:text-white hover:text-blue-800">Cover Generator</div>
            </a>
          </div>
          
          
          
      </div>



    </>
  );
}
