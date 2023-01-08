import Link from "next/link"
import { useRouter } from 'next/router'

const Nav = ()=>{
    const router = useRouter()
    const r = router.pathname
    console.log(router.pathname)


    return(
        <div className="fixed inset-x-0 bottom-0 mx-auto mb-8 w-fit md:relative md:mt-4 md:w-full md:max-w-[1100px] md:mb-4 px-3">
        <div className="flex items-center content-center justify-between p-3 mx-auto mt-0 space-x-4 bg-white rounded-full shadow md:p-3 sm:col-span-2 md:col-span-3 lg:col-span-4 card min-h-fit md:rounded-xl md:shadow-none">
         <Link href={"/"}><img src="./td.png" className="w-8" /></Link> 
          <div>
            <ul className="flex space-x-2 text-sm md:space-x-4 ">
            
            <Link href="/projects"><li className={`px-2 cursor-pointer hover:text-yellow-500 ${r=="/work"?" text-yellow-500":""} `}>Projects</li></Link>
            <Link href="/blog"><li className={`px-2 cursor-pointer hover:text-yellow-500 ${r=="/blog"?" text-yellow-500":""} `}>Writing</li></Link>
           
            
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Nav