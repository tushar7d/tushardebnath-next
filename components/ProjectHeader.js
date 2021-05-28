let ProjectHeader = (props) => {

  props
  return (
    <>
      <div className="justify-between mb-8 md:flex">
        <div>
          <div className="text-sm text-gray-500 font-medium dark:text-white  mb-0.5">
            {props.type}
          </div>
          <div className="text-2xl font-medium dark:text-white  mb-0.5 ">
            {props.title}
          </div>
        </div>
        <div className="text-gray-500 text-md dark:text-white">{props.date}</div>
      </div>
      <div
        className={`w-full  flex justify-center items-end  h-80 ${props.color } mb-8 `}
      >
        <img className="object-contain h-80" src={props.img}></img>
      </div>

     
      
    </>
  );
};
export default ProjectHeader;
