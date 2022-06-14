
export default function Layout(props) {
  return (
    <>
      <div className="bg-red-50 w-screen h-[85vh] bg-[url('/hero-zom.jpeg')] bg-cover bg-center bg-fixed " />     
       <div className="bg-red-300 mx-auto scrollbar-hide">
       {props.children}
      </div>

    </>
  );
}