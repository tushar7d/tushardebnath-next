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
        title: "Site title"
      }
     
    ]
  }