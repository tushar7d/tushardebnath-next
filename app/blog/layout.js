import CardList from "./CardLayout";
import { createClient } from "next-sanity";


  async function getData() {
    const client = createClient({
        projectId: "uvu14ce6",
        dataset: "production",
        apiVersion: "2023-03-07",
        useCdn: false
      });
    const res = await client.fetch(`*[_type == "blog" ]{slug,heading,subheading}`);
  
    return res;
  }





export default async function RootLayout({ children }) {

let data = await getData()
  return (
    <div className="flex w-[calc(100vw-80px)]  h-screen sticky top-0 overflow-hidden ">
      <CardList  list={data}/>
      {children}
    </div>
  );
}
