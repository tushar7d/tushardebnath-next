let WorkCard = (props) => {
  return (
    <div className="mb-14 ">
      <div
        className={`w-full  flex justify-center items-end  h-80 ${props.color} mb-4 `}
      >
        <img className="h-80 object-contain" src={props.img}></img>
      </div>
      <div className="text-xs text-gray-500 font-medium dark:text-white  mb-0.5">
        {props.type}
      </div>
      <div className="text-lg font-medium dark:text-white  mb-0.5 ">
        {props.title}
      </div>
      <div className=" text-sm text-gray-500 dark:text-white">
        {props.subtitle}
      </div>
    </div>
  );
};

export default WorkCard;
