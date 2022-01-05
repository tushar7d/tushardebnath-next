import Navigation from "./Navigation";
import HNavigation from "./HNavigation";

const Layout = (props) => {


  return (
    <div className="md:flex md:h-screen md:overflow-hidden ">
      
      <header className="hidden md:block lg:block">
        <Navigation />
      </header>
      <header className="sticky top-0 z-50 block md:hidden">
        <HNavigation />
      </header>
      <div className="relative flex-auto md:overflow-hidden md:h-screen">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
