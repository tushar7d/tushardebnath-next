import { useRouter } from "next/router";



const SubLayout = (props) => {
  const router = useRouter();
 

  return (
    <div className="md:w-[350px] md:min-w-[350px] mt-12 md:mt-0  border-r overflow-scroll scrollbar-hide  h-screen flex-initial divide-y ">
      {props.projects.map(({ title, slug, sub, badge, type }) => (
        <div onClick={() => router.push(`${props.src}${slug}`)}  key={slug}>
          <div
            className={
              router.asPath.startsWith(`${props.src}${slug}`)
                ? "ease-in-out px-2  py-6  bg-gray-50 "
                : "ease-in-out  px-2  py-6 hover:bg-gray-50"
            }
          >
            <div className="flex items-center justify-between space-x-2">
           
              <div >
              <small className="text-xs text-gray-500 uppercase ">{type}</small>
                <p className="text-base font-semibold ">{title}</p>
                <p className="text-sm font-normal text-gray-700 ">{sub}</p>
                
              </div>
              <img
                src={badge}
                className=" min-w-[80px] max-w-[80px]  max-h-[80px] min-h-[80px] rounded-lg border bg-blue-100"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubLayout;
