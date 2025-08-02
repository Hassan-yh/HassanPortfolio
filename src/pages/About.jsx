import P from "../components/P";
import Title from "../components/Title";
import "./about.scss";
import { useInView } from "react-intersection-observer";
function About() {
  const [ref, inView] = useInView({ threshold: 0 });
  return (
    <div id="about">
      <Title number={"01"}>About Me</Title>
      <div ref={ref} className={`about ${inView ? "glow-up" : ""}`}>
        <div className="left">
          <P>
            Hello! my name is Hassan and i have fun coding. From the moment I
            wrote my first line of code, I Knew I was hooked into the world of
            software development.
          </P>
          <P>
            But software development has never been ''just a job'' for me, it's
            offered an engaging challenge, which leads to constant learning and
            improvement to create high-quality software. What started with a
            simple line of code has become a full-fledged passion that only gets
            more exciting as time goes by.
          </P>
          <P>Here are a few technologies I’ve been working with recently:</P>
          <ul className="tools-list">
            <li className="tools"> JavaScript (ES6+) </li>
            {/* <li className="tools"> TypeScript </li> */}
            <li className="tools"> React </li>
            {/* <li className="tools"> Tailwind CSS </li> */}
            <li className="tools"> Styled Component </li>
            {/* <li className="tools"> Next.js </li> */}
            {/* <li className="tools"> Node.js </li> */}
            {/* <li className="tools"> Redux </li> */}
            {/* <li className="tools"> Supabase </li> */}
            {/* <li className="tools"> Context Api</li> */}
          </ul>
        </div>
        <div className="right">
          <img className="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
