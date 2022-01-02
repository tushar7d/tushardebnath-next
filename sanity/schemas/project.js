export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "pname",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Case Study', value: 'Case Study' },
          { title: 'Bite Sized', value: 'Bite Sized' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    
  
    {
      name: "desc",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "org",
      title: "Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description:"Your role in the project - As a Lead product designer...",
      validation: (Rule) => Rule.required(),
    },
    
    {
      name: "team",
      title: "Collaborators",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    },
   
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "pname",
        maxLength: 96,
      },
    },
    {
      name: "banner",
      title: "Banner",
      type: "image",
      validation: (Rule) => Rule.required(),
    
    },
    {
      name: "badge",
      title: "Badge",
      type: "image",
      validation: (Rule) => Rule.required(),
    
    },
  ],
  orderings: [
    {
      name: "manualOrder",
      title: "Manual order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
