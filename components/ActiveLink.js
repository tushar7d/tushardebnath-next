import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  
  const ss ={class:router.asPath === href ?true :false}
    
  

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} className={ss.class} ss={ss.class} onClick={handleClick} >
      {children}
    </a>
  )
}

export default ActiveLink