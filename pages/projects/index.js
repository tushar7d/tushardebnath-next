import { useRouter } from "next/router";
import { getSanityContent } from "../../utils/sanity";
import ProjectLayout from "../../components/ProjectLayout";
import Layout from '../../components/Layout'

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default function Index({ Projects }) {
  const router = useRouter();
  return (
    
      <ProjectLayout src="/projects/" projects={Projects} />
    
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllProject {
      allProject(sort: [{ order: ASC }]) {
       pname
        type
        desc
        org
        
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

  const Projects = data.allProject.map((prjkt) => ({
    title: prjkt.pname,
    slug: prjkt.slug.current,
    sub: prjkt.desc,
    badge: prjkt.badge.asset.url,
    type: prjkt.type,
  }));

  return {
    props: { Projects },
  };
}
