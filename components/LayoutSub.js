import { useRouter } from "next/router";
import Link from "next/link";



const LayoutSub = (props) => {
  const router = useRouter();
  

  return (
    <div className="w-[350px] min-w-[350px] border-r  overflow-scroll scrollbar-hide  h-screen flex-initial">
      {props.posts.map((post, index) => (
        <Link href={props.bs + post.slug} key={index}>
          <div
            className={
              router.asPath.startsWith(`${props.bs + post.slug}`)? "link-sub-selected": "link-sub"
            }
          >
            <small className="text-sm text-gray-400">{post.frontMatter.date}</small>
            
            <h5 className="text-base font-semibold">{post.frontMatter.title}</h5>
            <p className="text-sm">{post.frontMatter.description}</p>
            
            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LayoutSub;
