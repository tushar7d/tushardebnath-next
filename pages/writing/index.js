import LayoutSub from "../../components/LayoutSub"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'



const Writing = ({ posts }) => {
  return (
    <LayoutSub posts={posts} />
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('blog'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('blog', filename), 'utf-8')
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


export default Writing