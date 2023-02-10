import CardList from "./CardLayout";


import data from './data'



export default async function RootLayout({ children }) {


  return (
    <div className="flex w-[calc(100vw-80px)]  h-screen sticky top-0 overflow-hidden">
      <CardList  list={data}/>
      {children}
    </div>
  );
}
