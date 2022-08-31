import "react-medium-image-zoom/dist/styles.css";
export default function Layout(props) {
  return (
    <div className="">
      <div className="w-full  h-[50vh] bg-gray-100">test</div>
      <div className="max-w-3xl p-12 mx-auto prose bg-white shadow-xl -mt-44 rounded-xl ">{props.children}</div>
    </div>
  );
}
