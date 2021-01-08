import ListContainer from "./ListContainer";

let PluginList = () => {
  return (
    <ListContainer heading="Design Tools">
      <Entry heading="Project Scaffold" />
      <Entry heading="ColorKit" />
    </ListContainer>
  );
};
export default PluginList;

let Entry = (props) => {
  return (
    <div className="flex items-center py-3">
      <div className="w-12 h-12 bg-gray-200 rounded-full" />

      <div className="ml-2">
        <div className=" font-medium">{props.heading}</div>
      </div>
    </div>
  );
};
