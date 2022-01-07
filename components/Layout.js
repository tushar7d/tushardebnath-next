import Navigation from "./Navigation";
import HNavigation from "./HNavigation";

const Layout = (props) => {


  return (
    <div className="md:flex ">
      
      <header className="fixed hidden md:block lg:block">
        <Navigation />
      </header>
      <header className="sticky top-0 z-50 block md:hidden">
        <HNavigation />
      </header>
      <div className="">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
