let ListContainer = (props) => {
    return (
      <div className="h-full p-2 overflow-y-hidden">
        <div className=" text-2xl font-semibold mb-4">{props.heading}</div>
        <div className="divide-y-2">{props.children}</div>
      </div>
    );
  };
  export default ListContainer