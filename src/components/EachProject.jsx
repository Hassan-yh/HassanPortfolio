import { FaExternalLinkAlt } from "react-icons/fa";
import "./eachProject.scss";
import { useInView } from "react-intersection-observer";

function EachProject({ projectContents, index }) {
  const { coverImg, titleInfo, title, detail, tools, linkTo } = projectContents;

   const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`pro-box ${inView ? 'scale-up' : '' } ${index % 2 !== 0 ? "switch" : ""}`}>
      <div className="image-box">
        <img src={coverImg} alt="" className="image" />
      </div>
      <div className="detail-box">
        <p className="title-info">{titleInfo}</p>
        <p className="titles">{title}</p>
        <p className="detail">{detail}</p>
        <p className="tools">{tools?.join(", ")}</p>
        <a href={linkTo}>
          <FaExternalLinkAlt className="link-icon" />
        </a>
      </div>
    </div>
  );
}

export default EachProject;
