let Card = (props) => {
  return (
    <li className="flex ">
      <div className="w-16 h-16 bg-blue-50 rounded-xl" />
      <div className="pl-3 mt-2">
        <h3 className="text-sm font-medium ">{props.h}</h3>
        <p className="text-sm text-gray-400 ">{props.s}</p>
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
          <Card h="Heading" s="This is a subheading" />
          <Card h="Heading" s="This is a subheading" />
          <Card h="Heading" s="This is a subheading" />
          <Card h="Heading" s="This is a subheading" />
          <Card h="Heading" s="This is a subheading" />
          <Card h="Heading" s="This is a subheading" />
          <Card h="Heading" s="This is a subheading" />
          <Card h="Heading" s="This is a subheading" />
        </ul>
      </div>
      {children}
    </div>
  );
}
