import "./Projects.css";

const Project = ({ img, title }) => {
  return (
    <li className="projects">
      <img src={img} className="project-img" alt="" />
      <div className="project-content">
        <h4>{title}</h4>
      </div>
    </li>
  );
};

export default Project;
