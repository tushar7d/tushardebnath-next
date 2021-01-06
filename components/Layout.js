export default function 
Layout(props) {
    return (
      <div
        className={` container m-auto  bg-red-50 w-screen h-screen`}
      >
        {props.children}
      </div>
    );
  }
  