export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      name: "dataStarted",
      title: "DateStarted",
      type: "string"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "string",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean"
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }]
    }

  ],
}
