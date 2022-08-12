import "./Projects.css";

const Project = ({ img, title, link }) => {
  return (
    <li className="projects">
      <a href={link} target="_blank">
        <img src={img} className="project-img" alt="" />
        <div className="project-content">
          <h4>{title}</h4>
        </div>
      </a>
    </li>
  );
};

export default Project;
