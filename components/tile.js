import Link from "next/link";

const Tile = (props) => {
    return (
      <Link href={props.link} target={props.ext ? "_blank" : "_self"}>
        <div className={"flex sm:flex-col justify-between card md:h-[240px] "}>
          <div className="w-1/4 sm:w-full">
            {" "}
            <img src={props.img} className="w-20 md:w-16 " />
          </div>
  
          <div className="w-3/4 sm:w-full">
            <div className="mb-1 text-xs tracking-widest text-gray-400">
              {props.type}
            </div>
            <div className="mb-1 font-medium ">{props.heading}</div>
          </div>
        </div>
      </Link>
    );
  };

  export default Tile