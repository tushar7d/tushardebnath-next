let SectionHeading = (props) => {
  return <h1 className="mt-6 mb-2 text-xl font-semibold ">{props.children}</h1>;
};

let Content = () => {
  return (
    <div className="overflow-auto no-scrollbar md:w-1/2 bg-gray-50">
      <div className="grid grid-cols-1 gap-4 p-4 md:p-8">
        <SectionHeading>Selected Projects</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card
            h="Helping users find the right car"
            dc="Expedia"
            l="https://tushardebnath.notion.site/Helping-users-find-the-right-offer-4140d01adf3343dc98249fdb91d643e2"
          />
          <Card
            h="Order Tracking Re-Imagined"
            dc="Zomato"
            l="https://tushardebnath.notion.site/Zomato-Order-Tracker-bb8ca43d32bb4363a1dfe0643c4cb91c"
          />
        </div>

        <SectionHeading>Recent writing</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card
          h="How to run Figma shortcuts using Midi."
          dc="Medium"
          l="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
        />
        <Card
          h="How I created a Figma plugin to automate our design system migration."
          dc="Medium"
          l="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
        />
        <Card
          h="How structuring our Figma files in a consistent way has improved collaboration and efficiency."
          dc="Medium"
          l="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
        />
        </div>
        <SectionHeading>Open source</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card
          h="ColorKit - Generate darker or lighter shades of a particular color"
          dc="Figma Plugin"
          l="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
        />
        <Card
          h="Project Scaffold - Generate project stucture"
          dc="Figma Plugin"
          l="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
        />
        <Card
          h="Cover Generator for Figma"
          dc="Figma Plugin"
          l="https://www.figma.com/community/plugin/745146759001708690/Cover-Generator"
        />
        </div>
      </div>
    </div>
  );
};
let Card = (props) => {
  return (
    <a href={props.l ? props.l : "/"} className="w-full " target="_blank">
      <div className="p-4 min-h-[280px] transition duration-500 ease-in-out bg-white border border-gray-200 rounded-lg md:hover:scale-105 hover:shadow-lg">
        <h1 className="mb-1 font-semibold ">{props.h ? props.h : "Heading"}</h1>
        <p>{props.dc ? props.dc : "description"}</p>
      </div>
    </a>
  );
};

export default Content;
