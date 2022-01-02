import { useRouter } from "next/router";
import Link from "next/link";

const SubLayout = (props) => {
  const router = useRouter();

  return (
    <div>
      <div className=" overflow-scroll h-screen scrollbar-hide  flex-initial block  lg:hidden  divide-y ">
        {props.projects.map(({ title, slug, sub, badge, type }) => (
          <Link href={`${props.src}${slug}`} key={slug}>
            <div
              className={
                router.asPath.startsWith(`${props.src}${slug}`)
                  ? "link-sub-selected"
                  : "link-sub"
              }
            >
              <div className="flex space-x-2 ">
                <img src={badge} className=" min-w-[80px] max-w-[80px]  max-h-[80px] min-h-[80px]  rounded-lg bg-blue-100" />

                <div>
                  <small>{type}</small>
                  <h5 className="text-sm font-semibold">{title}</h5>
                  <p className="text-sm font-normal text-gray-700">{sub}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[350px] min-w-[350px] border-r  overflow-scroll scrollbar-hide  h-screen flex-initial hidden md:hidden lg:block  divide-y ">
        {props.projects.map(({ title, slug, sub, badge, type }) => (
          <Link href={`${props.src}${slug}`} key={slug}>
            <div
              className={
                router.asPath.startsWith(`${props.src}${slug}`)
                  ? "link-sub-selected"
                  : "link-sub"
              }
            >
              <div className="flex space-x-2">
                <img src={badge} className=" min-w-[80px] max-w-[80px]  max-h-[80px] min-h-[80px] rounded-lg border bg-blue-100" />

                <div>
                  <small className=" text-gray-500">{type}</small>
                  <h5 className="text-sm font-semibold">{title}</h5>
                  <p className="text-sm font-normal text-gray-700">{sub}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubLayout;
