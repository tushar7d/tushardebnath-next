import { MDXRemote } from "next-mdx-remote/rsc";
import { createClient } from "next-sanity";


  async function getData() {
    const client = createClient({
        projectId: "uvu14ce6",
        dataset: "production",
        apiVersion: "2023-03-07",
        useCdn: false
      });
    const res = await client.fetch(`*[_type == "caseStudies"]`);
  
    return res;
  }
export default  async function Page() {
    let data = await getData()
  return (
    <div className="prose home-content-container">
       <MDXRemote source={data[0].content} />
    </div>
  );
}
