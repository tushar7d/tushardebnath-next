
import { useRouter } from "next/router";
import { getSanityContent } from "../../utils/sanity";
import SubLayout from "../../components/SubLayout";

export default function Index({ pages }) {
  const router = useRouter();
  return (
    <div>
      <SubLayout src="/writing/" pages={pages} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllPage {
      allPage {
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

  const pages = data.allPage.map((page) => ({
    title: page.title,
    slug: page.slug.current,
    date: page.publishDate,
    sub: page.sub,
  }));

  return {
    props: { pages },
  };
}
