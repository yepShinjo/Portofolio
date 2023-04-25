
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    django,
    flask,
    c,
    bootstrap,
    canva,
    chatgpt,
    logo_prema,
    animeporto

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Three.JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Flask ",
      company_name: "Personal",
      icon: logo_prema,
      iconBg: "#383E56",
      date: "March 2022 - present",
      points: [
        "Developing and maintaining web applications using Flask and other related technologies.",
        "Diligently incorporating relevant and significant informations to optimize applications",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Doing code reviews and implementing constructive feedback",
      ],
    },
    {
      title: "Django",
      company_name: "Personal",
      icon: logo_prema,
      iconBg: "#E6DEDD",
      date: "March 2022 - present",
      points: [
        "Developing and maintaining web applications using Django and other related technologies.",
        "Diligently incorporating relevant and significant informations to optimize applications",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Doing code reviews and implementing constructive feedback",
      ],
    },
    {
      title: "Three.JS ",
      company_name: "Personal",
      icon: logo_prema,
      iconBg: "#383E56",
      date: "March 2022 - present",
      points: [
        "Developing and maintaining web applications using Three.JS and other related technologies.",
        "Diligently incorporating relevant and significant informations to optimize applications",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Doing code reviews and implementing constructive feedback",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Personal",
      icon: logo_prema,
      iconBg: "#383E56",
      date: "March 2022 - present",
      points: [
        "Developing and maintaining web applications using stacks of frameworks and other related technologies.",
        "Diligently incorporating relevant and significant informations to optimize applications",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Doing code reviews and implementing constructive feedback",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: logo_prema,
      iconBg: "#E6DEDD",
      date: "March 2022 - present",
      points: [
        "Developing and maintaining web applications using stacks of framework, database and other related technologies.",
        "Diligently incorporating relevant and significant informations to optimize applications",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Doing code reviews and implementing constructive feedback",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "Another one of my passion work, personal portofolio with Three.JS.",
      tags: [
        {
          name: "Portfolio",
          color: "blue-text-gradient",
        },
        {
          name: "Three.JS",
          color: "green-text-gradient",
        },
        {
          name: "passion",
          color: "pink-text-gradient",
        },
      ],
      image: animeporto,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };