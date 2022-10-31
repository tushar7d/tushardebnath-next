import "photoswipe/dist/photoswipe.css";
import { Gallery } from "react-photoswipe-gallery";
export default function Layout(props) {
  return (
    <div className="">
      <div className="w-full  h-[50vh]  bg-[url('/zomato/Cover.png')] ">
       
      </div>
      <div className="max-w-3xl p-12 mx-auto prose bg-white shadow-xl -mt-44 rounded-xl ">
        <Gallery>{props.children}</Gallery>
      </div>
    </div>
  );
}
