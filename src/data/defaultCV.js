const defaultCV = [
  {
    category: "Details",
    entries: [
      {
        id: 1,
        label: "Personal Details",
        values: {
          Name: "Jimmy",
          Email: "jimmy@jimmy.com",
          Phone: "123456789",
        },
        editStatus: false,
      },
      {
        id: 2,
        label: "Personal Details",
        values: {
          Name: "harry",
          Email: "harry@harry.com",
          Phone: "123456789",
        },
        editStatus: true,
      },
    ],
  },
  {
    category: "Education",
    entries: [
      {
        id: 3,
        values: {
          School: "University of Sydney",
          CourseDetails: "Bachelor of Law",
          Dates: "1997 - 1999",
        },
        editStatus: false,
      },
      {
        id: 4,
        values: {
          School: "University of Melbourne",
          CourseDetails: "Master of Law",
          Dates: "2000 - 2002",
        },
        editStatus: false,
      },
    ],
  },

  {
    category: "Work",
    entries: [
      {
        id: 5,
        values: {
          Organisation: "Big Law",
          Position: "Lawyer",
          Dates: "2000 - 2005",
        },
        editStatus: false,
      },
      {
        id: 6,
        values: {
          Organisation: "Australian Government",
          Position: "Policy Guy",
          Dates: "2006 - 2015",
        },
        editStatus: false,
      },
    ],
  },
];

export { defaultCV };
