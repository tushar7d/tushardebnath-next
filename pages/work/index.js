
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ActiveLink from '../../components/ActiveLink'


const Work = ({ posts }) => {
  return (
    <div className="w-[350px] border-r ">
      
      {posts.map((post, index) => (
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

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Work