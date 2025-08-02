import { useInView } from "react-intersection-observer";
import TabbedComponent from "../components/TabbedComponent";
import Title from "../components/Title";
import "./experience.scss";

const contents = [
  {
    post: "Frontend Developer",
    firm: "Newcore",
    firmLink: "https://newcoretechnologies.com/",
    dateFrom: "October 2023",
    dateTo: "Present",
    workMode: "Full Time",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of projects",
      "Languages and libraries used are TypeScript, JavaScript, CSS, React, Next, Node.js, Express, Git, and GitHub...",
      "Interface with engineers and designers on daily basis, on improving and developing the product.",
      "Add dynamic functionality such as form validation, interactive elements (sliders, modals), and animations.",
      "Working with Software Engineering team in the development and improvement of the In-house Product.",
      "Consume APIs (RESTful or GraphQL) to retrieve data and display it on the frontend.",
      "Use lazy loading for assets like images or components that aren’t needed immediately.",
      "Implement code splitting and bundle optimization for faster load times, particularly in single-page applications.",
    ],
  },
  // {
  //   post: "Backend",
  //   firm: "Crown Institute",
  //   firmLink: "https://citedu.org/",
  //   dateFrom: "October 2021",
  //   dateTo: "july 2023",
  //   workMode: "Part-time",
  //   duties: [
  //     "Write modern, performant, maintainable code for a diverse array of projects",
  //     "Design and develop RESTful or GraphQL APIs to enable communication between the frontend and backend.",
  //     "Create endpoints that handle various client requests, such as GET, POST, PUT, DELETE.",
  //     "Design, implement, and maintain databases (e.g., SQL, NoSQL).",
  //     "Write complex queries to fetch, insert, update, and delete data efficiently.",
  //     "Optimize queries and database schema for performance.",
  //     "Set up and manage database replication, sharding, and backups.",
  //   ],
  // },
  // {
  //   post: "FrontEnd",
  //   firm: "Virtuous Sprout",
  //   firmLink: "https://virtuousSprout.org/",
  //   dateFrom: "October 2021",
  //   dateTo: "july 2023",
  //   workMode: "Part-time",
  //   duties: [
  //     "Write modern, performant, maintainable code for a diverse array of projects",
  //     "fixed some bugs",
  //     "Implemented some tailwind css", "Document the usage of components and how other developers can contribute or use them effectively."
  //   ],
  // },
  {
    post: "FrontEnd",
    firm: "Freelance",
    firmLink: "https://",
    dateFrom: "October 2023",
    dateTo: "Present",
    workMode: "Part-time",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of projects",
      "Implement the front-end of Admin web application", "Keep libraries and frameworks up to date to ensure the application uses the latest features and security patches", "Handle dependency management using tools like npm or yarn.", "Integrate and work with content management systems (CMS) such as WordPress, Strapi, or Contentful to dynamically manage content on the site.","Work closely with backend developers to ensure proper integration with backend services, such as APIs, authentication systems, and databases."
    ],
  },
];

function Experience() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      id="experience"
      className={`experience ${inView ? "glow-up" : ""}`}
    >
      <Title number={"02"}>Where I've Worked</Title>
      <TabbedComponent contents={contents} />
    </div>
  );
}

export default Experience;
