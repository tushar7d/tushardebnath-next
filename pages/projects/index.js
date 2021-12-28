import Link from "next/link";
import { getSanityContent } from "../../utils/sanity";

export default function Index({ pages }) {
  return (
    <div>
      <h1>This Site Loads MDX From Sanity.io</h1>
      <p>View any of these pages to see it in action:</p>
      <ul>
        {pages.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/projects/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllProject {
      allProject {
        title
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
  }));

  return {
    props: { pages },
  };
}
