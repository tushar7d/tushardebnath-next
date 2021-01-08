import ListContainer from "./ListContainer";

let PluginList = () => {
  return (
    <ListContainer heading="Recent Figma plugins">
      <Entry heading="blahhhh" />
      <Entry heading="blahhhh" />
    </ListContainer>
  );
};
export default PluginList;

let Entry = (props) => {
  return (
    <div className="flex items-center  py-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full" />

      <div className="ml-2">
        <div className=" font-medium">{props.heading}</div>
      </div>
    </div>
  );
};
