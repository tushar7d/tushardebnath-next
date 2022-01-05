import { useRouter } from "next/router";
import Link from "next/link";

const SubLayout = ({ pages,src }) => {
  const router = useRouter();

  return (
  
      
      <div className="md:w-[350px] md:min-w-[350px]  border-r overflow-scroll scrollbar-hide  h-screen flex-initial divide-y ">
        {pages.map(({ title, slug, date, sub }) => (
          <Link href={`${src}${slug}`} key={slug}>
            <div
              className={
                router.asPath.startsWith(`${src}${slug}`)
                  ? "link-sub-selected"
                  : "link-sub"
              }
            >
              
              <small className="text-xs text-gray-500 uppercase ">type</small>
                <p className="text-base font-semibold ">{title}</p>
                <p className="text-sm font-normal text-gray-700 ">{sub}</p>
            </div>
          </Link>
        ))}
      </div>
    
  );
};

export default SubLayout;
