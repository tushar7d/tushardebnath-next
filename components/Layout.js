import ActiveLink from "./ActiveLink";

const Layout = (props) => {
    return (
      <div className="flex ">
        <div className="w-[240px] h-screen border-r " >

          <section className=" w-full font-bold   p-4">
            Tushar Debnath

          </section>
          <div className=" grid grid-row-5  gap-6 p-4">
 
            <ActiveLink href="/" className="p-3 hover:bg-gray-400 rounded-lg ">About Me</ActiveLink>
            <ActiveLink href="/work" className="p-3 hover:bg-gray-400 rounded-lg">Work</ActiveLink>
            <ActiveLink href="/writing" className="p-3 hover:bg-gray-400 rounded-lg">Writing</ActiveLink>
            <ActiveLink href="/resume" className="p-3 hover:bg-gray-400 rounded-lg">Resume</ActiveLink>
            <div>Projects</div>
            <a></a>
            <a></a>
          </div>
        </div>
        {props.children}
      </div>
    );
  };
  
  export default Layout;
  