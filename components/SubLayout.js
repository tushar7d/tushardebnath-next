import { useRouter } from "next/router";
import Link from "next/link";

const SubLayout = ({ pages,src }) => {
  const router = useRouter();

  return (
    <div>
      <div className=" overflow-scroll h-screen scrollbar-hide  flex-initial block  lg:hidden  divide-y ">
        {pages.map(({ title, slug, date, sub }) => (
          <Link href={`${src}${slug}`} key={slug}>
            <div
              className={
                router.asPath.startsWith(`${src}${slug}`)
                  ? "link-sub-selected"
                  : "link-sub"
              }
            >
              <small className="text-sm text-gray-400">{date}</small>

              <h5 className="text-base font-semibold">{title}</h5>
              <p className="text-sm font-normal text-gray-700">{sub}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[350px] min-w-[350px] border-r  overflow-scroll scrollbar-hide  h-screen flex-initial hidden md:hidden lg:block  ">
        {pages.map(({ title, slug, date, sub }) => (
          <Link href={`${src}${slug}`} key={slug}>
            <div
              className={
                router.asPath.startsWith(`${src}${slug}`)
                  ? "link-sub-selected"
                  : "link-sub"
              }
            >
              <small className="text-sm text-gray-400">{date}</small>

              <h5 className="text-base font-semibold">{title}</h5>
              <p className="text-sm font-normal text-gray-700">{sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubLayout;
