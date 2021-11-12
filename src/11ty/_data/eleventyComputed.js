module.exports = {
  permalink: "{{ page.filePathStem }}.html",
  title: "Pro - Beautiful Responsive Bootstrap 5 HTML Template",
  preview: true,

  data: {
    services: [
      {
        title: "App design",
        icon: "bi-phone",
        amount: 75,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in rhoncus tortor. Suspendisse sodales odio vitae turpis dictum, sit amet sollicitudin turpis fringilla. Curabitur ultrices in dui et maximus. In dapibus fermentum nisl, non condimentum mauris hendrerit in. Maecenas aliquet dictum lacus, quis hendrerit leo mollis ullamcorper. Nulla facilisi. Sed molestie enim a nisi dapibus, ac aliquam dolor tristique. Nulla maximus ullamcorper dictum. ",
      },
      {
        title: "Web design",
        icon: "bi-globe",
        amount: 95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in rhoncus tortor. Suspendisse sodales odio vitae turpis dictum, sit amet sollicitudin turpis fringilla. Curabitur ultrices in dui et maximus. In dapibus fermentum nisl, non condimentum mauris hendrerit in. Maecenas aliquet dictum lacus, quis hendrerit leo mollis ullamcorper. Nulla facilisi. Sed molestie enim a nisi dapibus, ac aliquam dolor tristique. Nulla maximus ullamcorper dictum. ",
      },
      {
        title: "Art & Illustration",
        icon: "bi-brush",
        amount: 65,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in rhoncus tortor. Suspendisse sodales odio vitae turpis dictum, sit amet sollicitudin turpis fringilla. Curabitur ultrices in dui et maximus. In dapibus fermentum nisl, non condimentum mauris hendrerit in. Maecenas aliquet dictum lacus, quis hendrerit leo mollis ullamcorper. Nulla facilisi. Sed molestie enim a nisi dapibus, ac aliquam dolor tristique. Nulla maximus ullamcorper dictum. ",
      },
      {
        title: "Branding",
        icon: "bi-bootstrap",
        amount: 85,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in rhoncus tortor. Suspendisse sodales odio vitae turpis dictum, sit amet sollicitudin turpis fringilla. Curabitur ultrices in dui et maximus. In dapibus fermentum nisl, non condimentum mauris hendrerit in. Maecenas aliquet dictum lacus, quis hendrerit leo mollis ullamcorper. Nulla facilisi. Sed molestie enim a nisi dapibus, ac aliquam dolor tristique. Nulla maximus ullamcorper dictum. ",
      },
    ],

    qualifications: [
      {
        date: "2014 - 2020",
        title: "Computer Science",
        subtitle: "BSC",
        small: "South University Of Bangladesh",
        description: "Major in UI Design, UX Design, Interaction Design, User Empathy, Branding.",
      },
      {
        date: "2010 - 2014",
        title: "Art Direction",
        subtitle: "MSC",
        small: "Defodil University of India",
        description: "Major in UI Design, UX Design, Interaction Design, User Empathy, Branding.",
      },
    ],

    experiences: [
      {
        date: "2014 - 2020",
        title: "Web Designer",
        subtitle: "Behance",
        small: "San Francisco",
        color: "text-blue",
        description: "After finishing my studies, I first concentrated on my work in Behance, here I worked as a web designer.",
      },
      {
        date: "2010 - 2014",
        title: "Art Direction",
        subtitle: "Dribble",
        small: "London",
        color: "text-magenta",
        description: "I've got an opportunity to work in one of the best teams in Dribbble podcast designer.",
      },
    ],

    testimonials: [
      {
        name: "Jane Sparrow",
        job: "UI/UX Designer, USA",
        description: "Really that guy is amazing, he saved my time and properly have completed my requirement with great effort. I appreciate him for web & app design, he is good at fit.",
        img: "client-01.jpg",
      },
      {
        name: "John Doe",
        job: "CEO at EgoPlanet, London",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a odio dui. Curabitur mollis egestas mauris, sed elementum mauris condimentum sit amet.",
        img: "client-02.jpg",
      },
    ],

    workProcess: [
      {
        title: "Consulting",
        description: "Vestibulum tellus ligula, pharetra nec enim vel, posuere ullamcorper nunc. Duis nec pellentesque lectus",
        bg: "bg-primary",
        icon: "./assets/icons/coding.png",
      },
      {
        title: "Idea creation",
        description: "Vestibulum tellus ligula, pharetra nec enim vel, posuere ullamcorper nunc. Duis nec pellentesque lectus",
        bg: "bg-secondary",
        icon: "./assets/icons/chat.png",
      },
      {
        title: "Applyig changes",
        description: "Vestibulum tellus ligula, pharetra nec enim vel, posuere ullamcorper nunc. Duis nec pellentesque lectus",
        bg: "bg-warning bg-darken",
        icon: "./assets/icons/graph.png",
      },
    ]
  },

  navigation: {
    onPage: [
      "Home",
      "Services",
      "Skills",
      "Experience",
      "Portfolio",
      "Testimonials",
      "Work Process",
      "Contact",
      "Stay connected",
    ],

    subpages: [
      "Services",
      "Portfolio",
      "Contact",
      "404",
    ]
  },
};