export default {
    name: "siteconfig",
    type: "document",
    title: "Site Settings",
    __experimental_actions: [
         "update", "publish"
    ],
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        hidden: true,
      },

      {
        name: "content",
        type: "markdown",
        title: "Content"
      },
      {
        name: "work",
        type: "markdown",
        title: "Work"
      },
      {
        name: "education",
        type: "markdown",
        title: "Education"
      },

     
    ]
  }