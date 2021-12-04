import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : ' black',
  }
  const ss ={class:router.asPath === href ?" bg-red-500":" bg-gray-200"}
    
  

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} className={ss.class} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink