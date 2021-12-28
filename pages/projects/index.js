import Link from "next/link";
import { useRouter } from "next/router";
import { getSanityContent } from "../../utils/sanity";
import SubLayout from "../../components/SubLayout";

export default function Index({ pages }) {
  const router = useRouter();
  return (
    <div>
      
      <SubLayout pages={pages} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllProject {
      allProject {
        publishDate
        title
        sub
        slug {
          current
        }
        content
      }
    }
    `,
  });

  const pages = data.allProject.map((page) => ({
    title: page.title,
    slug: page.slug.current,
    date: page.publishDate,
    sub: page.sub,
  }));

  return {
    props: { pages },
  };
}
