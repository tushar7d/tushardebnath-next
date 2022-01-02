import S from "@sanity/desk-tool/structure-builder";


// Add Schema type to hidden
const hiddenDocTypes = listItem =>
  ![ "siteconfig",].includes(
    listItem.getId()
  );

// Render a custom UI to view siteconfig & pages 
// and showing other items except mentioed in the hiddendoctypes
export default () =>
  S.list()
    .title("Content Manager")
    .items([
      S.listItem()
        .title("Site config") 
        .child(
          S.editor()
            .schemaType("siteconfig")
            .documentId("siteconfig")
        ),
        S.divider(),
      S.documentTypeListItem("writing").title("Writing"),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.divider(),
      S.documentTypeListItem("timeline").title("Timeline"),
   
      
    ]);