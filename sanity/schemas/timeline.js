export default {
    name: "timeline",
    title: "Timeline",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "details",
            title: "Details",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            title: 'Date',
            name: 'date',
            type: 'date',
            validation: (Rule) => Rule.required(),
            options: {
              dateFormat: 'DD-MM-YYYY',
            }
          },
          
     
    ],
   
  };
  