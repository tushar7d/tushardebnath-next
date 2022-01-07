import { useRouter } from "next/router";
import { getSanityContent } from "../../utils/sanity";
import SubLayout from "../../components/BlogLayout";
import Layout from '../../components/Layout'


Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default function Index({ po }) {
  const router = useRouter();
  return (
    
      <SubLayout src="/writing/" pages={po} />
  
  );
}

export async function getStaticProps() {
  const datad = await getSanityContent({
    query: `
    query AllWriting {
      allWriting(sort: [{ order: ASC }]) {
        title
         sub
         tags
         publishDate 
         badge{
           asset{
             url
           }
         }
         
         slug {
           current
         }
         content
       }
     }
    `,
  });

  const po = datad.allWriting.map((page) => ({
    title: page.title,
    slug: page.slug.current,
    date: page.publishDate,
    desc: page.sub,
    badge: page.badge.asset.url,
  }));

  return {
    props: { po },
  };
}
