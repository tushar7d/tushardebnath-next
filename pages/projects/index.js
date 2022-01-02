import { useRouter } from "next/router";
import { getSanityContent } from "../../utils/sanity";
import ProjectLayout from "../../components/ProjectLayout";

export default function Index({ Projects }) {
  const router = useRouter();
  return (
    <div>
      <ProjectLayout src="/projects/" projects={Projects} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllProject {
      allProject {
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
