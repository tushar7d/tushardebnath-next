import Link from "next/link";

const Stepper = ({po,order,count})=>{
    return(
      <div className="flex justify-between w-full pt-12 mt-4">
      {order > 0 ? (
        <Link href={`/projects/${po[order - 1].slug}`}>
          <div className="p-4 bg-gray-100 rounded-md cursor-pointer w-80">
            <div>Previous</div>
            <div>{po[order - 1].title}</div>
          </div>
        </Link>
      ) : null}
      
      {order < count ? (
        <Link href={`/projects/${po[order + 1].slug}`}>
          <div className="p-4 bg-gray-100 rounded-md cursor-pointer w-80">
            <div>Next</div>
            <div>{po[order + 1].title}</div>
          </div>
        </Link>
      ) : null}
    </div>
    )
  }

  export default Stepper