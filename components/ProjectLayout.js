import { useRouter } from "next/router";
import Link from "next/link";

const SubLayout = (props) => {
  const router = useRouter();

  return (
    <div className="md:w-[350px] md:min-w-[350px]  border-r overflow-scroll scrollbar-hide  h-screen flex-initial divide-y ">
      {props.projects.map(({ title, slug, sub, badge, type }) => (
        <Link href={`${props.src}${slug}`} key={slug}>
          <div
            className={
              router.asPath.startsWith(`${props.src}${slug}`)
                ? "ease-in-out px-2  py-2  bg-gray-50 "
                : "ease-in-out  px-2  py-2 hover:bg-gray-50"
            }
          >
            <div className="flex justify-between space-x-2">
           
              <div >
              <small className="text-xs text-gray-500 uppercase ">{type}</small>
                <h5 className="text-lg font-semibold ">{title}</h5>
                <p className="text-sm font-normal text-gray-700 ">{sub}</p>
                
              </div>
              <img
                src={badge}
                className=" min-w-[80px] max-w-[80px]  max-h-[80px] min-h-[80px] rounded-lg border bg-blue-100"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubLayout;
