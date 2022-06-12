import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="grid lg:grid-cols-2 ">
        <Bio />
        <Navigation />
      </div>
    </>
  );
}

let Bio = () => {
  return (
    <div className="flex flex-col justify-between col-span-1 p-6 mb-12 lg:h-screen lg:p-14 bg-gray-50 lg:mb-0">
      <div>
        <div className="flex items-center content-center justify-center w-12 h-12 mb-12 text-xl text-white bg-black rounded-full">
          TD
        </div>
        <h1 className="text-2xl font-semibold md:text-3xl md:leading-relaxed lg:mt-24 ">
          Hello, I’m Tushar Debnath a product designer and design technologist
          from New Delhi.
        </h1>

        <p className="mt-6 font-normal leading-relaxed text-gray-500 lg:text-lg">
          I am a self taught designer with a background in engineering. I have
          over 8 years of experience building consumer products used by millions
          of people across the globe and for a variety of industries like
          Travel, Food Delivery, Banking, and Instant Messaging.
        </p>
        {/*
        <Link href="/about">
          <button className="flex items-center mt-6 text-gray-500 hover:text-yellow-500">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 hover:text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </Link>
        
        */}

        
      </div>

      <Iconset />
    </div>
  );
};

let LinkButton = (props) => {
  return (
    <Link href={props.link}>
      <button className="flex items-center justify-center w-full p-3 mt-6 text-sm text-gray-500 rounded-lg bg-gray-50 hover:text-yellow-500">
        {props.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-1 hover:text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </Link>
  );
};
let Heading = (props) => {
  return (
    <div className="pl-4 mt-12 mb-6 text-lg font-semibold tracking-widest ">
      {props.children}
    </div>
  );
};

let Navigation = () => {
  return (
    <div className="col-span-1 p-6 bg-white lg:relative lg:overflow-scroll lg:h-screen scrollbar-hide lg:p-8">
      <Heading>WORK</Heading>
     
      <Cell
        title="Redesigning Zomato's order tracker."
        desc="Case study"
        link="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
        img="/Zomato.png"
      />
      <Cell
        title="Helping Expedia users find the right rental car"
        desc="Case Study"
        link="https://tushardebnath.notion.site/Helping-users-find-the-right-car-4140d01adf3343dc98249fdb91d643e2"
        img="/Expedia.png"
      />

      <Heading>WRITING</Heading>
      <Cell
        title="How I created a Figma plugin to automate our design system migration"
        desc="Medium"
        link="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
        img="/dsauto.png"
      />
      <Cell title="Figma shortcuts using MIDI" desc="Medium" link="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa" img="/Key.png" />
      <Cell
        title="Consistent file structure = Better collaboration"
        desc="Medium"
        link="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
        img="/struct.png"
        
      />

      <Heading>SIDE PROJECTS</Heading>
      <Cell
        title="ColorKit: Generate darker or lighter shades of a particular color"
        desc="Figma Plugin"
        link="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
        img="/colors.png"
      />
      <Cell
        title="Project Scaffold: Generate project stucture"
        desc="Figma Plugin"
        link="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
        img="/scaffold.png"
      />
    </div>
  );
};

let Cell = (props) => {
  return (
    <a href={props.link}  target="_blank">
      <div className="flex items-center p-4 hover:bg-gray-50 rounded-3xl hover:cursor-pointer hover:text-yellow-500 ">
        <div className="flex items-center justify-center w-20 h-20 bg-gray-100 shrink-0 rounded-xl" >
          <img src={props.img} className="w-14" />
        </div>
        <div className="ml-3">
          <div className="text-sm text-gray-500">{props.desc}</div>
          <div className="text-lg ">{props.title}</div>
        </div>
      </div>
    </a>
  );
};

let IconLink = (props) => {
  return (
    <a
      className="mr-5 no-underline dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500"
      target="_blank"
      href={props.link}
    >
      {props.children}
    </a>
  );
};

let Iconset = () => {
  return (
    <div className="flex items-baseline mt-24 text-lg lg:mt-0 ">
      <IconLink link="https://www.linkedin.com/in/tushardebnath/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.37214 24H0.396429V7.97643H5.37214V24ZM2.88161 5.79066C1.29054 5.79066 0 4.47278 0 2.88167C1.13882e-08 2.1174 0.303597 1.38444 0.844003 0.844022C1.38441 0.303604 2.11736 0 2.88161 0C3.64586 0 4.3788 0.303604 4.91921 0.844022C5.45962 1.38444 5.76321 2.1174 5.76321 2.88167C5.76321 4.47278 4.47214 5.79066 2.88161 5.79066ZM23.9946 24H19.0296V16.1998C19.0296 14.3409 18.9921 11.9569 16.4427 11.9569C13.8557 11.9569 13.4593 13.9766 13.4593 16.0659V24H8.48893V7.97643H13.2611V10.1622H13.3307C13.995 8.90323 15.6177 7.57463 18.0386 7.57463C23.0743 7.57463 24 10.8908 24 15.198V24H23.9946Z"
            fill="currentColor"
          />
        </svg>
      </IconLink>
      <IconLink link="https://dribbble.com/tushardebnath">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.38316 0 0 5.38316 0 12C0 18.6168 5.38316 24 12 24C18.6168 24 24 18.6168 24 12C24 5.38316 18.6168 0 12 0ZM19.934 5.53384C21.3616 7.278 22.2261 9.4995 22.2486 11.9188C21.9107 11.8473 18.522 11.16 15.1114 11.5889C14.8331 10.9095 14.5704 10.3118 14.2106 9.57527C18.0003 8.028 19.7179 5.82614 19.934 5.53384ZM18.7946 4.34855C18.6102 4.61115 17.0673 6.68497 13.4226 8.05108C11.743 4.96515 9.88137 2.43005 9.59806 2.05069C12.8485 1.26716 16.2738 2.11215 18.7946 4.34855ZM7.64231 2.73968C7.91255 3.11027 9.74414 5.64852 11.4425 8.66753C6.64795 9.94074 2.42506 9.9224 1.96665 9.91636C2.63129 6.73573 4.77474 4.09224 7.64231 2.73968ZM1.75016 12.0156C1.75016 11.9108 1.75224 11.8065 1.75539 11.7024C2.20384 11.7116 7.17087 11.7756 12.2895 10.2437C12.583 10.818 12.8633 11.4009 13.1205 11.9832C9.41414 13.0272 6.04665 16.0248 4.38518 18.869C2.7481 17.0519 1.75016 14.6482 1.75016 12.0156ZM5.70856 20.1017C6.77923 17.913 9.68492 15.0878 13.8172 13.6781C15.2563 17.4176 15.8514 20.5516 16.0038 21.4509C12.708 22.8547 8.745 22.4696 5.70856 20.1017ZM17.727 20.5125C17.6219 19.889 17.0763 16.8885 15.7357 13.2045C18.9477 12.6903 21.7696 13.5319 22.1203 13.6426C21.6634 16.4946 20.0264 18.9576 17.727 20.5125Z"
            fill="currentColor"
          />
        </svg>
      </IconLink>
      <IconLink link="https://github.com/tushar7d">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.02742 19.3248C8.02742 19.424 7.91613 19.5034 7.77581 19.5034C7.61613 19.5183 7.50484 19.4389 7.50484 19.3248C7.50484 19.2255 7.61613 19.1461 7.75645 19.1461C7.90161 19.1312 8.02742 19.2106 8.02742 19.3248ZM6.52258 19.1014C6.48871 19.2007 6.58548 19.3148 6.73065 19.3446C6.85645 19.3942 7.00161 19.3446 7.03064 19.2454C7.05968 19.1461 6.96774 19.032 6.82258 18.9873C6.69677 18.9526 6.55645 19.0022 6.52258 19.1014ZM8.66129 19.0171C8.52097 19.0518 8.42419 19.1461 8.43871 19.2603C8.45323 19.3595 8.57903 19.424 8.72419 19.3893C8.86452 19.3545 8.96129 19.2603 8.94677 19.161C8.93226 19.0667 8.80161 19.0022 8.66129 19.0171ZM11.8452 0C5.13387 0 0 5.22573 0 12.109C0 17.6126 3.37742 22.3222 8.20161 23.9798C8.82097 24.0939 9.03871 23.7019 9.03871 23.3793C9.03871 23.0716 9.02419 21.3744 9.02419 20.3322C9.02419 20.3322 5.6371 21.0766 4.92581 18.8533C4.92581 18.8533 4.37419 17.4092 3.58065 17.037C3.58065 17.037 2.47258 16.2578 3.65806 16.2727C3.65806 16.2727 4.8629 16.372 5.52581 17.5531C6.58548 19.4687 8.36129 18.9178 9.05323 18.5903C9.16452 17.7963 9.47903 17.2454 9.82742 16.9179C7.12258 16.6102 4.39355 16.2082 4.39355 11.4341C4.39355 10.0693 4.76129 9.38447 5.53548 8.51103C5.40968 8.18846 4.99839 6.85846 5.66129 5.14136C6.67258 4.81878 9 6.48129 9 6.48129C9.96774 6.20338 11.0081 6.05946 12.0387 6.05946C13.0694 6.05946 14.1097 6.20338 15.0774 6.48129C15.0774 6.48129 17.4048 4.81382 18.4161 5.14136C19.079 6.86342 18.6677 8.18846 18.5419 8.51103C19.3161 9.38943 19.7903 10.0743 19.7903 11.4341C19.7903 16.2231 16.9403 16.6052 14.2355 16.9179C14.6806 17.3099 15.0581 18.0543 15.0581 19.2205C15.0581 20.893 15.0435 22.9624 15.0435 23.3694C15.0435 23.6919 15.2661 24.084 15.8806 23.9699C20.7194 22.3222 24 17.6126 24 12.109C24 5.22573 18.5565 0 11.8452 0ZM4.70323 17.1164C4.64032 17.166 4.65484 17.2801 4.7371 17.3744C4.81452 17.4538 4.92581 17.4886 4.98871 17.424C5.05161 17.3744 5.0371 17.2603 4.95484 17.166C4.87742 17.0866 4.76613 17.0518 4.70323 17.1164ZM4.18064 16.7144C4.14677 16.7789 4.19516 16.8583 4.29194 16.9079C4.36935 16.9576 4.46613 16.9427 4.5 16.8732C4.53387 16.8087 4.48548 16.7293 4.38871 16.6796C4.29194 16.6499 4.21452 16.6648 4.18064 16.7144ZM5.74839 18.4811C5.67097 18.5456 5.7 18.6945 5.81129 18.7888C5.92258 18.9029 6.0629 18.9178 6.12581 18.8384C6.18871 18.7739 6.15968 18.625 6.0629 18.5307C5.95645 18.4166 5.81129 18.4017 5.74839 18.4811ZM5.19677 17.7516C5.11935 17.8012 5.11935 17.9302 5.19677 18.0444C5.27419 18.1585 5.40484 18.2082 5.46774 18.1585C5.54516 18.094 5.54516 17.965 5.46774 17.8508C5.4 17.7367 5.27419 17.6871 5.19677 17.7516Z"
            fill="currentColor"
          />
        </svg>
      </IconLink>
    </div>
  );
};
