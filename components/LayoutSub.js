import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";

const LayoutSub = (props) => {
  const router = useRouter()
  return (
    <div className="w-[350px] border-r ">
      {props.posts.map((post, index) => (
       
        <ActiveLink href={props.bs + post.slug} key={index}>
           
          <div
            className={router.asPath.startsWith(`${props.bs+post.slug}`) ? "link-sub-selected" : "link-sub"}
            style={{ maxWidth: "540px" }}
          >
            
            <h5 className="text-base font-medium">{post.frontMatter.title}</h5>
            <p className="text-sm">{post.frontMatter.description}</p>
            <p className="">
              <small className="text-sm">{post.frontMatter.date}</small>
            </p>
          </div>
        </ActiveLink>
      ))
      
      }
    </div>
  );
};

export default LayoutSub;
