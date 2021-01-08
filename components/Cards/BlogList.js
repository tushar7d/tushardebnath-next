import ListContainer from './ListContainer'

let BlogList = () => {
  return (
    <ListContainer heading="Recent posts">
      <Entry
        heading="How I created a Figma plugin to automate our design system
            migration."
      />
      <Entry
        heading="How structuring Figma files in a consistent way has improved
          collaboration and efficiency."
      />
      <Entry
        heading="How structuring Figma files in a consistent way has improved
          collaboration and efficiency."
      />
    </ListContainer>
  );
};
export default BlogList;

let Entry = (props) => {
  return (
    <div className="my-4">
      <div className="text-base font-medium mt-4 ">{props.heading}</div>
      <div className="  text-base font-normal text-gray-400 ">
        Medium Article
      </div>
    </div>
  );
};


