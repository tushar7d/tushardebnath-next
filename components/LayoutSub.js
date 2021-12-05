
import ActiveLink from './ActiveLink'


const LayoutSub = (props) => {
  return (
    <div className="w-[350px] border-r ">
      
      {props.posts.map((post, index) => (
        <ActiveLink href={'/work/' + post.slug} key={index}>
          <div className=" p-4 m-3 rounded-md hover:bg-gray-200 " style={{ maxWidth: '540px' }}>
           
                  <h5 className="">{post.frontMatter.title}</h5>
                  <p className="">{post.frontMatter.description}</p>
                  <p className="">
                    <small className="">{post.frontMatter.date}</small>
                  </p>
          </div>
              
        </ActiveLink>
      ))}
    </div>
  )
}



export default LayoutSub