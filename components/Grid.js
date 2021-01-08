let Grid = (props) => (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 p-4 pt-12">
      {props.children}
    </div>
  );

  export default Grid