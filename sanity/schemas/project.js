export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
      {
        title: 'Publish Date',
        name: 'publishDate',
        type: 'date',
        validation: (Rule) => Rule.required(),
        options: {
          dateFormat: 'DD-MM-YYYY',
        }
      },
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'sub',
        title: 'Sub Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: (Rule) => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        title: 'Tags',
        name: 'tags',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'markdown',
      },
    ],
    orderings: [
      {
        title: "Manual order",
        name: "manualOrder",
        by: [{ field: "order", direction: "asc" }],
      },
    ],
    
  };
  