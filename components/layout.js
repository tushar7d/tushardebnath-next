
import "react-medium-image-zoom/dist/styles.css";
export default function Layout(props) {
  return (
     <div className="max-w-3xl p-3 mx-auto mt-24 prose ">
        {props.children}
    </div>


  )}