const Layout = (props) => {
    return (
      <div className="flex ">
        <div className="w-[240px] h-screen border-r " >

          <section className=" w-full font-bold   m-4">
            Tushar Debnath

          </section>
          <div className=" grid grid-row-5  gap-6 p-6">
            
            <a>About Me</a>
            <a>Work</a>
            <a>Writing</a>
            <a>Resume</a>
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
  