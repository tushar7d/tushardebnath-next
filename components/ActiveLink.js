import { useRouter } from 'next/router'
import Link from 'next/link'

function ActiveLink({ children, href }) {
  const router = useRouter()
  
  const ss ={class:router.asPath === href ?true :false}
    
  

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
<Link href={href} ss={ss.class} onClick={handleClick} >
      {children}
    </Link>
  )
}

export default ActiveLink