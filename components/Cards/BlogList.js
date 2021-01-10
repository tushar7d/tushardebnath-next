import ListContainer from './ListContainer'
import Entry from './Entry'

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



