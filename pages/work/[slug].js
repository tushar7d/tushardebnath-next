import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <article className="mx-auto mt-5 max-w-prose prose">
      <h1>{title}</h1>
      <h2>{date}</h2>
      <MDXRemote  {...mdxSource} />
    </article>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
 
  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
    
  }
 
}

export { getStaticProps, getStaticPaths }
export default PostPage
