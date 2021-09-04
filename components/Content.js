let SectionHeading = (props) => {
  return <h1 className="mt-6 mb-2 text-xl font-semibold ">{props.children}</h1>;
};

let Content = () => {
  return (
    <div className="overflow-auto no-scrollbar md:w-1/2 bg-gray-50 ">
      <div className="grid grid-cols-1 gap-4 p-4 md:p-8 lg:p-12">
        <SectionHeading>Selected work</SectionHeading>
        <div className="project-section">
        <ImgCard
            h="Redesigning Zomato's order tracker."
            dc="Case Study"
            l="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
            im="/crystal.png"
          />
          <ImgCard
            h="Helping users find the right car."
            dc="Case Study"
            l="https://tushardebnath.notion.site/Helping-users-find-the-right-car-4140d01adf3343dc98249fdb91d643e2"
            im="/car.png"
          />
         
        </div>
        <SectionHeading>Recent writing</SectionHeading>
        <div className="project-section">
          <Card
            h="How I created a Figma plugin to automate our design system migration."
            dc="Medium"
            l="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
            im="/auto.png"
          />
          <Card
            h="Figma shortcuts using Midi."
            dc="Medium"
            l="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
            im="/midi.png"
          />

          <Card
            h="Consistent file structure equals better collaboration"
            dc="Medium"
            l="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
            im={td}
          />
        </div>
        <SectionHeading>Open source</SectionHeading>
        <div className="project-section">
          <Card
            h="ColorKit - Generate darker or lighter shades of a particular color"
            dc="Figma Plugin"
            l="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
            im="/clr.png"
          />
          <Card
            h="Project Scaffold - Generate project stucture"
            dc="Figma Plugin"
            l="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
            im={td}
          />
          <Card
            h="Cover Generator for Figma"
            dc="Figma Plugin"
            l="https://www.figma.com/community/plugin/745146759001708690/Cover-Generator"
            im={td}
          />
        </div>
      </div>
    </div>
  );
};
let td = "/crystal.png";
let Card = (props) => {
  return (
    <a
      href={props.l ? props.l : "/"}
      className="w-full h-full "
      target="_blank"
    >
      <div className="flex flex-col h-full transition duration-500 ease-in-out bg-white border border-gray-200 rounded-lg md:hover:scale-105 hover:shadow-lg">
        {/* 
       
       <div
          className="w-full h-[230px] bg-gray-200 rounded-t-lg"
          style={{ backgroundImage: `url(${props.im})`, backgroundSize:"cover", backgroundPosition:"center top" }}
        />
        */}
        <div className="flex flex-col justify-between flex-1 p-4 ">
          <h1 className="text-lg font-medium text-gray-800 md:text-md lg:text-lg ">
            {props.h ? props.h : "Heading"}
          </h1>
          <p className="text-gray-500">{props.dc ? props.dc : "description"}</p>
        </div>
      </div>
    </a>
  );
};

let ImgCard = (props) => {
  return (
    <a
      href={props.l ? props.l : "/"}
      className="w-full h-full "
      target="_blank"
    >
      <div className="flex flex-col h-[350px] transition duration-500 ease-in-out bg-white border border-gray-200 rounded-lg md:hover:scale-105 hover:shadow-lg">
        
       
       <div
          className="w-full h-[230px] bg-gray-200 rounded-t-lg"
          style={{ backgroundImage: `url(${props.im})`, backgroundSize:"cover", backgroundPosition:"center top" }}
        />
        
        <div className="flex flex-col justify-between flex-1 p-4 ">
          <h1 className="text-lg font-medium text-gray-800 md:text-md lg:text-lg ">
            {props.h ? props.h : "Heading"}
          </h1>
          <p className="text-gray-500">{props.dc ? props.dc : "description"}</p>
        </div>
      </div>
    </a>
  );
};

export default Content;
