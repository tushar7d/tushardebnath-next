import { useRouter } from "next/router";
import Link from "next/link";

const SubLayout = ({ pages, src }) => {
  const router = useRouter();

  return (
    <div className="md:w-[350px] md:min-w-[350px]  border-r overflow-scroll scrollbar-hide  h-screen flex-initial divide-y ">
      {pages.map(({ title, slug, date, desc, badge }) => (
        <Link href={`${src}${slug}`} key={slug}>
          <div
            className={
              router.asPath.startsWith(`${src}${slug}`)
                ? "link-sub-selected"
                : "link-sub"
            }
          >
           <div className="flex items-center justify-between space-x-2">
           
           <div >
           <small className="text-xs text-gray-500 uppercase ">{date}</small>
             <p className="text-base font-semibold ">{title}</p>
             <p className="text-sm font-normal text-gray-700 ">{desc}</p>
             
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
