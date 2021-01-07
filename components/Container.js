
export default function Container(props) {
  return (
    <div className=" max-w-screen-xl w-screen m-auto ">
      
      {props.children}
    </div>
  );
}
