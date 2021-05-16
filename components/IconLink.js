let IconLink = (props) =>{
    return(
      <a
      className="mr-5 dark:text-white no-underline hover:text-yellow-500 dark:hover:text-yellow-500"
      target="_blank"
      href={props.link}
    >
      {props.children}
    </a>
  
    )
  }
  export default IconLink