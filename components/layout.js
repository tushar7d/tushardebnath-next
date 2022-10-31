import "photoswipe/dist/photoswipe.css";
import { Gallery } from "react-photoswipe-gallery";
export default function Layout(props) {
  return (
    <div className="">
      <div className="w-full  h-[60vh]  bg-[url('/zomato/Cover.png')] flex flex-col p-2   md:items-center">
        <h1 className="mt-24 mb-4 text-5xl font-semibold text-left text-white md:text-center md:text-8xl">{props.title}</h1>
        <h3 className="text-3xl font-semibold text-left text-white md:text-5xl md:text-center - ">{props.sub}</h3>
      </div>
      <div className="max-w-4xl p-12 mx-auto prose bg-white shadow-xl -mt-44 rounded-xl ">
        <Gallery>{props.children}</Gallery>
      </div>
    </div>
  );
}
