let SectionHeading = (props) => {
  return <h1 className="mt-6 mb-2 text-xl font-semibold ">{props.children}</h1>;
};

let Content = () => {
  return (
    <div className="overflow-auto no-scrollbar md:w-1/2 bg-gray-50">
      <div className="grid grid-cols-1 gap-4 p-4 md:p-8">
        <SectionHeading>Recent writing</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card
            h="How to run Figma shortcuts using Midi."
            dc="Medium"
            l="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
            im={td}
          />
          <Card
            h="How I created a Figma plugin to automate our design system migration."
            dc="Medium"
            l="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
            im={td}
          />
          <Card
            h="How structuring our Figma files in a consistent way has improved collaboration and efficiency."
            dc="Medium"
            l="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
            im={td}
          />
        </div>
        <SectionHeading>Open source</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card
            h="ColorKit - Generate darker or lighter shades of a particular color"
            dc="Figma Plugin"
            l="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
            im={td}
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
let td = "";
let Card = (props) => {
  return (
    <a
      href={props.l ? props.l : "/"}
      className="w-full h-full "
      target="_blank"
    >
      <div className="flex flex-col h-[350px] transition duration-500 ease-in-out bg-white border border-gray-200 rounded-lg md:hover:scale-105 hover:shadow-lg">
        <div
          className="w-full h-[200px] bg-gray-200 rounded-t-lg"
          style={{ backgroundImage: `url(${props.im})` }}
        />
        <div className="flex flex-col justify-between flex-1 p-4 ">
          <h1 className="font-medium text-gray-800 text-md ">
            {props.h ? props.h : "Heading"}
          </h1>
          <p className="text-gray-500">{props.dc ? props.dc : "description"}</p>
        </div>
      </div>
    </a>
  );
};

export default Content;
