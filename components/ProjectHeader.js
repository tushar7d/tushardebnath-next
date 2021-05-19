let ProjectHeader = (props) => {
  return (
    <>
      <div className="md:flex justify-between mb-8">
        <div>
          <div className="text-sm text-gray-500 font-medium dark:text-white  mb-0.5">
            {props.type}
          </div>
          <div className="text-2xl font-medium dark:text-white  mb-0.5 ">
            {props.title}
          </div>
        </div>
        <div className="text-md text-gray-500 dark:text-white">{props.date}</div>
      </div>
      <div
        className={`w-full  flex justify-center items-end  h-80 ${props.color } mb-8 `}
      >
        <img className="h-80 object-contain" src={props.img}></img>
      </div>

      <div className="border border-gray-200 rounded divide-y md:divide-y-0 md:flex md:divide-x divide-gray-300">
        <div className="p-4 md:w-1/3">
          <h3 className="text-xs text-gray-400 font-medium dark:text-white mb-1">
            PROBLEM
          </h3>
          <p className="text-sm text-gray-800 dark:text-white">
            {props.problem}
          </p>
        </div>
        <div className="p-4  md:w-1/3">
          <h3 className="text-xs text-gray-400 font-medium dark:text-white mb-1">
            SOLUTION
          </h3>
          <p className="text-sm text-gray-800 dark:text-white"> {props.solution}</p>
        </div>
        <div className="p-4 md:w-1/3">
          <h3 className="text-xs text-gray-400 font-medium dark:text-white mb-1">
            MY ROLE
          </h3>
          <p className="text-sm text-gray-800 dark:text-white"> {props.role}</p>
        </div>
      </div>
      
    </>
  );
};
export default ProjectHeader;
