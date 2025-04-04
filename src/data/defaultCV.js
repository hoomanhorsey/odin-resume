const defaultCV = [
  {
    category: "Details",
    items: [
      {
        label: "Personal Details",
        values: {
          name: "Jimmy",
          email: "jimmy@jimmy.com",
          phone: "123456789",
          editStatus: false,
        },
      },
    ],
  },
  {
    category: "Education",
    items: [
      {
        values: {
          school: "University of Sydney",
          courseDetails: "Bachelor of Law",
          dates: "1997 - 1999",
          editStatus: false,
        },
      },
      {
        values: {
          school: "University of Sydney",
          courseDetails: "Bachelor of Law",
          dates: "1997 - 1999",
          editStatus: false,
        },
      },
    ],
  },

  {
    category: "Work",
    items: [
      {
        values: {
          company: "Big Law",
          role: "Lawyer",
          dates: "2000 - 2005",
          editStatus: false,
        },
      },
      {
        values: {
          company: "Australian Government",
          role: "Policy Guy",
          dates: "2006 - 2015",
          editStatus: false,
        },
      },
    ],
  },
];

export { defaultCV };
