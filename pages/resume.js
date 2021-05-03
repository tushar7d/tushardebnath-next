import { useTheme } from 'next-themes'
export default function Resume() {
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

            <div className="prose  my-12 mx-auto px-8 md:px-4">
                <h1 className="dark:text-white">
                    Résumé
      </h1>
                <h2 className="dark:text-white">About me</h2>
                <p className="dark:text-white">
                    I am Tushar Debnath a product designer and a design technologist from New Delhi. Currently helping millions order food online
                    at Zomato. In the past I have worked with Expedia, Hike Messenger and MakeMyTrip building products at
                    a global scale, developing design systems and develop tools.
                 </p>

                <h2 className="dark:text-white">Skills</h2>

                <h3 className="dark:text-white">Design automation & tooling</h3>
                <p className="dark:text-white">
                    I have a background in engineering and I have allways been passionate about using technology to design better.
                    I have over the years developed multiple tools in the form of Fontend Toolkits, Sketch/Figma Plugins to help designers design better.
                 </p>

                <h3 className="dark:text-white">Design system</h3>
                <p className="dark:text-white">
                    I am experienced in setting up process & workflow for building & maintaining Design systems. I have done so for multiple organisations and in varying capacities.
                    I have also worked closely with implementation teams and understand the technical nuances of implmenting token and component based systems.
                 </p>

                <h3 className="dark:text-white">Design & prototyping</h3>
                <p className="dark:text-white">
                    I am highly proficient in using all major design tools, my current favourite being Figma for Interface design,
                    Framer & Principle for early stage prototyping and React for Fully interactive code based protoypes.
                 </p>

                <h2 className="dark:text-white">Experience</h2>

                <h3 className="dark:text-white">Zomato</h3>
                <p className="dark:text-white">
                    Senior Product Designer, 2020 - Present
                </p>

                <h3 className="dark:text-white">Expedia Group</h3>
                <p className="dark:text-white">
                    Senior Product Designer, 2018 - 2020
                </p>
                <h3 className="dark:text-white">Hike Messenger</h3>
                <p className="dark:text-white">
                    Lead Product Designer, 2017 - 2018
                </p>

                <h3 className="dark:text-white">Makemytrip</h3>
                <p className="dark:text-white">
                    Product Designer, 2015 - 2017
                </p>
                <h3 className="dark:text-white">Frog walks out</h3>
                <p className="dark:text-white">
                   Web designer, 2014 - 2015
                </p>

                <h2 className="dark:text-white">Education</h2>

                <h3 className="dark:text-white">Bachelors in Information Technology</h3>
                <p className="dark:text-white">
                    I.T.S Engineering College
                </p>

            </div>
        </div>
    );
}
