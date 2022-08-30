// theme.config.js
export default {
    titleSuffix: ' – Nextra',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `MIT ${new Date().getFullYear()} © Shu Ding.`,
    
    logo: (
      <>
        <svg>...</svg>
        <span>Next.js Static Site Generator</span>
      </>
    ),
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Nextra: the next docs builder" />
        <meta name="og:title" content="Nextra: the next docs builder" />
      </>
    ),
  }