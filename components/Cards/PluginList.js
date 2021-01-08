import ListContainer from "./ListContainer";

let PluginList = () => {
  return (
    <ListContainer heading="Design Tools">
      <Entry heading="Project Scaffold" sub="A opensource plugin to scaffold out a common file structure for your figma files" />
      <Entry heading="ColorKit" sub="A opensource plugin to scaffold out a common file structure for your figma files" />
      <Entry heading="ColorKit" sub="A opensource plugin to scaffold out a common file structure for your figma files" />
    </ListContainer>
  );
};
export default PluginList;

let Entry = (props) => {
  return (
    <div className="flex items-center py-3">
      <div className=" w-12 h-12 bg-gray-200  rounded-sm" />

      <div className="ml-2">
        <div className=" font-medium">{props.heading}</div>
        <div className=" text-gray-500 text-sm">{props.sub}</div>
      </div>
    </div>
  );
};
