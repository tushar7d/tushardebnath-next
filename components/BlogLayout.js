import { useRouter } from "next/router";
import Link from "next/link";

const SubLayout = ({ pages,src }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex-initial block h-screen overflow-scroll divide-y  scrollbar-hide lg:hidden">
        {pages.map(({ title, slug, date, sub }) => (
          <Link href={`${src}${slug}`} key={slug}>
            <div
              className={
                router.asPath.startsWith(`${src}${slug}`)
                  ? "link-sub-selected"
                  : "link-sub"
              }
            >
              

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
