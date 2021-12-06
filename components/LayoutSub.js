import ActiveLink from "./ActiveLink";

const LayoutSub = (props) => {
  return (
    <div className="w-[350px] border-r ">
      {props.posts.map((post, index) => (
       
        <ActiveLink href={props.bs + post.slug} key={index}>
           
          <div
            className="transition duration-300  ease-in-out p-4 m-3 hover:rounded-md hover:bg-gray-200 border-b hover:border-b-0 "
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
