import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center p-4 ">
        <h3 className="text-2xl font-bold invisible">Tushar Debnath</h3>
        <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg></button></div>

      <div className="prose  mt-12 mx-auto px-4">
        <h1 className="dark:text-white">
          Hello, I'm Tushar Debnath. 
      </h1>
        <p className="dark:text-white">
          A Product designer and a design technologist from New Delhi. Currently helping millions order food online
          at Zomato. In the past I have worked with Expedia, Hike Messenger and MakeMyTrip building products at
          a global scale, developing design systems and develop internal tools.
      </p>
        <div className="flex">
          <a className="mr-5 dark:text-white" href="https://www.linkedin.com/in/tushardebnath/">Linkedin</a>
          <a className="mr-5 dark:text-white" href="https://dribbble.com/tushardebnath">Dribbble</a>
        </div>

        <h2 className="dark:text-white" >Writing</h2>
        <div className="mb-3">
          <a className="text-l no-underline dark:text-white" href="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa">How to run Figma shortcuts using Midi.</a>
        </div>
        <div className="mb-3">
          <a className="text-l no-underline dark:text-white" href="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e">Automating our design system migration @ Expedia.</a>
        </div>
        <div>
          <a className="text-l no-underline dark:text-white" href="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85">Better way to structure design files.</a>
        </div>

        <h2 className="dark:text-white">
          Figma Plugins
        </h2>
        <div className="mb-3">
          <a className="text-l no-underline dark:text-white" href="https://www.figma.com/community/plugin/797696673804519719/Color-Kit">ColorKit</a>
        </div>
        <div className="mb-3">
          <a className="text-l no-underline dark:text-white" href="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold">Project Scaffold</a>
        </div>
        <div className="mb-3">
          <a className="text-l no-underline dark:text-white" href="https://www.figma.com/community/plugin/745146759001708690/Cover-Generator">Cover Generator</a>
        </div>
      </div>
    </div>
  );
}
