let Entry = (props) => {
  return (
    <div className="my-4">
      <div className="text-base font-medium mt-4 ">{props.heading}</div>
      <div className="  text-base font-normal text-gray-400 ">
        {props.sub ? props.sub : "Medium Article"}
      </div>
    </div>
  );
};
export default Entry;
