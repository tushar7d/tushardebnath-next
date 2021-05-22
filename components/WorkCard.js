import Link from "next/link";


let WorkCard = (props) => {
  return (
   <Link href={props.link} >
   
      <div className="mb-14 cursor-pointer ">
        <div
          className={`w-full  flex justify-center items-end  h-80 ${props.color} mb-4 `}
        >
          <img className="h-80 object-contain" src={props.img}></img>
        </div>
        <div className="text-xs text-gray-500 font-medium dark:text-white  mb-0.5">
          {props.type}
        </div>
        <div className="section-heading">
          {props.title}
        </div>
        <div className=" section-subheading">
          {props.subtitle}
        </div>
      </div>
      </Link>
   
  );
};

export default WorkCard;
