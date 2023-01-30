import { MDXRemote } from 'next-mdx-remote/rsc'

import { readFileSync } from 'fs'

import path from 'path';

export default function Page() {
  const mdxDirectory = path.join(process.cwd(), 'app/blog/mdx');
  const one = readFileSync(mdxDirectory + '/one.mdx', 'utf8')
    return<>
    
    <div className=" max-w-[1000px] mx-auto w-full prose pt-12 px-3">
    <MDXRemote
      source={one}
    />
    </div>
    </>
  }
  