import { useRouter } from "next/router";
import Link from "next/link";

const LinkIn = (props) => {
    const router = useRouter();
    return (
      <Link href={props.href}>
        <div
          className={
            router.asPath.startsWith(props.href) ? "link link-selected" : "link"
          }
        >
          <div className="link-icon">{props.icon}</div>
          <div className="link-tag">{props.name}</div>
        </div>
      </Link>
    );
  };
  export default LinkIn