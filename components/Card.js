import Link from 'next/link'
export default function Card(props) {
  return (
    
    <div
      className={`${props.color} rounded-lg p-4  w-full  sm:h-96 ${props.size}`}
    >
      {props.to ? <Link href={props.to }>
      {props.children}
      </Link> : props.children }
      
    </div>
 
  );
}
