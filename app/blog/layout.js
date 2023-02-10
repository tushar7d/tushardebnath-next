import CardList from "./CardLayout";
import { promises as fs } from "fs";
import path from "path";

async function listDir(path) {
  try {
    return await fs.readdir(path);
  } catch (err) {
    console.error("Error occurred while reading directory!", err);
  }
}

export default async function RootLayout({ children }) {
  const mdxDirectory = path.join(process.cwd(), "app/blog/mdx/");
  let list = await listDir(mdxDirectory);

  return (
    <div className="flex w-[calc(100vw-80px)]  h-screen sticky top-0 overflow-hidden">
      <CardList  list={list}/>
      {children}
    </div>
  );
}
