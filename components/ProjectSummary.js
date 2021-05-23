let ProjectSummary = props =>{
    return(
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
    )
}
export default ProjectSummary