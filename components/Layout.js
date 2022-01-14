import Navigation from "./Navigation";
import HNavigation from "./HNavigation";

const Layout = (props) => {


  return (
    <div className="md:flex ">
      
      <header className="fixed hidden md:block lg:block">
        <Navigation />
      </header>
      <header className="fixed top-0 z-50 block md:hidden">
        <HNavigation />
      </header>
      <div className="md:w-[calc(100vw-200px)] md:ml-[200px]">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
