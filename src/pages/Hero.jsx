import "./Hero.scss";
import "../index.scss";
import Link from "../components/Link";
function Hero() {
  return (
    <div id="hero" className="hero">
      <p className="header">Hi, my name is</p>
      <div className="typewriter">
        <h1 className="name">Yusuf Hassan</h1>
      </div>
      <h1 className="build">I build things for the web.</h1>
      <p className="summary">
        I'm a software developer specialized in building exceptional digital
        solutions. Currently, I'm focused on building interactive experiences
        and human-centered product at{" "}
        <a href="https://newcoretechnologies.com" target="blank">
          Newcore Technologies
        </a>
        .
      </p>
      <Link linkTo={"mailto:yuhassan585@gmail.com"}>Get In Touch</Link>
    </div>
  );
}

export default Hero;
