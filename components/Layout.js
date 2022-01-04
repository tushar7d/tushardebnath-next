import Navigation from "./Navigation";
import HNavigation from "./HNavigation";
import { useTheme } from "next-themes";

const Layout = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="md:flex md:h-screen md:overflow-hidden ">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="absolute top-0 right-0 z-50 order-2 p-2 md:order-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle Dark
      </button>
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
