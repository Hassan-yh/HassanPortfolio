import { IoMdClose } from "react-icons/io";
import Link from "./Link";
import resume from "../assets/idreez-tech-cv.pdf";
import "./nav.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
function Nav() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <nav className={`nav ${toggle ? "toggle" : ""}`}>
      <a href="#" className="logo">
        <h2>
          H<sup>+</sup>
        </h2>
      </a>
      <ul
        className="main-nav-list"
        onClick={(e) => {
          console.log(e.target)
          const id = e.target.getAttribute("href");
          console.log(id)
          if (id.startsWith("#")) {
            document.getElementById(id.replace("#", "")).scrollIntoView();
            setToggle(!toggle);
          } 
        }}
      >
        <li className="nav-list">
          01.{" "}
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-list">
          02.{" "}
          <a className="nav-link" href="#experience">
            Experience
          </a>
        </li>
        <li className="nav-list">
          03.{" "}
          <a className="nav-link" href="#work">
            Work
          </a>
        </li>
        <li className="nav-list">
          04.{" "}
          <a className="nav-link" href="#more">
            More
          </a>
        </li>
        <li className="nav-list">
          05.{" "}
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
        <li className="nav-list">
          {" "}
          <Link linkTo={''}>Resume</Link>
        </li>
      </ul>
      <div className="nav-icon-box" onClick={handleToggle}>
        <BiMenuAltRight className="nav-icon open" />{" "}
        <IoMdClose className="nav-icon close" />{" "}
      </div>
    </nav>
  );
}

export default Nav;
