let Card = (props) => {
  return (
    <li className="flex ">
      <div className="w-[72px] h-[72px] bg-blue-50 rounded-xl" />
      <div className="pl-3 mt-1 text-gray-800">
      
        <h3 className="mb-1 text-sm ">{props.h}</h3>
        <p className="p-1 text-xs text-blue-400 w-fit bg-blue-50 ">{props.s}</p>
        
      </div>
    </li>
  );
};

export default function RootLayout({ children }) {
  return (
    <div className="flex w-[calc(100vw-80px)]  h-screen sticky top-0 overflow-hidden">
      <div className="w-[360px] border-r overflow-y-auto scrollbar-hide">
        <div className="sticky top-0 px-3 py-3 font-medium bg-white border-b ">My Blog</div>
        <ul className="p-3 space-y-6 ">
          <Card h="Automating our design system migration" s="Automation" />
          <Card h="Using Figma shortcuts via a midi keyboard" s="Hacking" />
          <Card h="Consistent files means better collaboration" s="Plugin" />
         
        </ul>
      </div>
      {children}
    </div>
  );
}
