import Head from "next/head";

let ExtLink = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block w-5 h-5 align-text-bottom"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
      </svg>
    );
  };

export default function Writing() {
  return (
    <>
      <Head>
        <title>Tushar Debnath | Writing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="page-container hp-page-mod">
        <h1 className="mb-4 hp-title">Writing</h1>
        <div className="mb-3">
          <a
            className="link-text"
            target="_blank"
            href="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
          >
            How to run Figma shortcuts using Midi. <ExtLink />
          </a>
        </div>
        <div className="mb-3">
          <a
            className="link-text"
            target="_blank"
            href="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
          >
            Automating our design system migration @ Expedia. <ExtLink />
          </a>
        </div>
        <div>
          <a
            className="link-text"
            target="_blank"
            href="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
          >
            Better way to structure design files. <ExtLink />
          </a>
        </div>
      </div>
      <h2 className="hp-heading"> Latest Figma Plugins</h2>
        <div className="mb-3">
          <a
            className="link-text "
            target="_blank"
            href="https://www.figma.com/community/plugin/797696673804519719/Color-Kit"
          >
            ColorKit <ExtLink />
          </a>
        </div>

        <div className="mb-3">
          <a
            className="link-text"
            target="_blank"
            href="https://www.figma.com/community/plugin/747372158567878238/Project-Scaffold"
          >
            Project Scaffold <ExtLink />
          </a>
        </div>
        <div className="mb-3">
          <a
            className="link-text"
            target="_blank"
            href="https://www.figma.com/community/plugin/745146759001708690/Cover-Generator"
          >
            Cover Generator <ExtLink />
          </a>
        </div>
    </>
  );
}
