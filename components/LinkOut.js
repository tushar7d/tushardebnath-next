import Link from "next/link";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";

const LinkOut = (props) => {
    return (
      <Link href={props.href}>
        <a target="_blank">
          <div className="link external">
            <div className="group">
              <div className="link-icon">{props.icon}</div>
              <div className="link-tag">{props.name}</div>
            </div>
            <div>
              <div className="link-icon-sm">
                <FaExternalLinkAlt size={10} />
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  };

  export default LinkOut