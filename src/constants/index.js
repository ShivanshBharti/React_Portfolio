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
  django,
  python,
  postgres,
  elk,
  cpp,
  fastapi,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ytubers,
  business,
  job,
  jobit,
  tripguide,
  threejs,
  cureya,
  cogni,
  mitra,
  equentis
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "elk",
    icon: elk,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Aspexx Health Solutions",
    icon: cureya,
    iconBg: "#ffff",
    date: "Sept 202 - Dec 2021",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Spearheaded the implementation of models and views for the company's website from the ground up ensuring a seamless and intuitive user experience.",
      "Implemented two-way login authentication functionality, improving website security and enhancing user trust",
      "Contributed to the recruitment of new interns, leveraging exceptional communication and team management skills",
    ],
  },
  {
    title: "Program Analyst Trainee",
    company_name: "Cognizant",
    icon: cogni,
    iconBg: "#ffff",
    date: "April 2022 - Sept 2022",
    points: [
      "Proficient in writing and executing automated tests using tools like Selenium, TestNG, Cucumber, and SOAP UI, ensuring precise and reliable results.",
      "Expert at identifying and troubleshooting bugs during testing, utilizing thorough backtracking techniques for effective issue resolution.",
      "Skilled in creating detailed test cases and scenarios for manual testing, ensuring comprehensive coverage of all possible situations.",
      "Capable of automating test results, streamlining the testing process, and enhancing overall efficiency.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Invento Robotics",
    icon: mitra,
    iconBg: "#000000",
    date: "Nov 2022 - Nov 2023",
    points: [
      "Developed a web based data collection platform using Webrtc to collect dataset for training the AI model.",
      "Implemented a dynamic user interface for the company's website, improving user experience and increasing user engagement",
      "Executed the development of a Generative AI based voice chatbot which converts text to speech and speech to text",
      "Leveraged GPT-4 backend technology to enable advanced querying and enhance user engagement, ensuring seamless integration of cutting-edge AI into Discord platforms",
      "Spearheaded the creation of a multifaceted React application, incorporating real-time server status monitoring, interactive user interfaces, and revamped landing pages, elevating user engagement and company visibility",
      "Engineered the development of a React project for a senior care home, incorporating WebRTC and WebSockets for fetching robot feeds. Ensured user-friendly interfaces and seamless functionality, enhancing the overall user experience.",
      "Enacted cutting-edge React capabilities to ensure seamless user interactions and implemented dynamic server status monitoring, enhancing overall performance and user satisfaction for the company's digital platforms",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Equentis(Research and Ranking)",
    icon: equentis,
    iconBg: "#ffff",
    date: "Jan 2024 - Present",
    points: [
      "Organized and developed the customer portfolio reactivation process decreasing the operational time 85%.",
      "Automated the process of uploading market research rules, reducing manual effort.",
      "Played a key role in deciding the flows, database structures and dictating best practices in REST API development.",
      "Utilized proficiency in Angular to enhance user interface design and functionality, improving overall user experience on the web application.",
      "Worked on rendering the angular code with back-end, majorly with the Ag-grid.",
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
    name: "Ytubers",
    description:
      "Web-based platform that allows users to search and hire Content Creators from various backgrounds, providing a convenient and efficient solution for hiring needs.",
    tags: [
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient",
      },
    ],
    image: ytubers,
    source_code_link: "https://github.com/ShivanshBharti/Ytubers",
  },
  {
    name: "Loan Application System",
    description:
      "Web-based application that enables users to apply for business loans, which will be sanctioned according to the user's asset value and profit or loss of the user's business.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
    ],
    image: business,
    source_code_link:
      "https://github.com/ShivanshBharti/Demyst_business_loan_application",
  },
  {
    name: "Job Review Application",
    description:
      "A comprehensive job application review platform that allows reviewers to  apply CRUD operations on job applications.",
    tags: [
      {
        name: "django REST",
        color: "blue-text-gradient",
      },
    ],
    image: job,
    source_code_link:
      "https://github.com/ShivanshBharti/Job-Application-Review-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
