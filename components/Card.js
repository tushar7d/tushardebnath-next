import Link from 'next/link'
export default function Card(props) {
  return (

    <div
      className={`${props.color} rounded-lg  w-full  sm:h-96 ${props.size}  ${props.to ? "cursor-pointer" : "cursor-default"}`}
    >
      {props.to ? <Link href={props.to}>
        {props.children}
      </Link> : props.children}

    </div>

  );
}
