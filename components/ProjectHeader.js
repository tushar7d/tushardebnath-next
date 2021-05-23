let ProjectHeader = (props) => {
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

      <div className="border border-gray-200 divide-y divide-gray-300 rounded md:divide-y-0 md:flex md:divide-x">
        <div className="p-4 md:w-1/3">
          <h3 className="mb-1 text-xs font-medium text-gray-400 dark:text-white">
            PROBLEM
          </h3>
          <p className="text-sm text-gray-800 dark:text-white">
            {props.problem}
          </p>
        </div>
        <div className="p-4 md:w-1/3">
          <h3 className="mb-1 text-xs font-medium text-gray-400 dark:text-white">
            SOLUTION
          </h3>
          <p className="text-sm text-gray-800 dark:text-white"> {props.solution}</p>
        </div>
        <div className="p-4 md:w-1/3">
          <h3 className="mb-1 text-xs font-medium text-gray-400 dark:text-white">
            MY ROLE
          </h3>
          <p className="text-sm text-gray-800 dark:text-white"> {props.role}</p>
        </div>
      </div>
      
    </>
  );
};
export default ProjectHeader;
