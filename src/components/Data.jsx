import Project from "./Projects";

const sections = [
  {
    id: 0,
    title: "About Me",
    content: (
      <div className="container-aboutme">
        <div className="aboutme-image">
          <img src="./images/boy.png" alt="" />
        </div>
        <div className="aboutme-content">
          <p>
            I'm a web developer with a front-en orientation. I like teamwork and
            challenges that allow me to grow as a professional. I have 100%
            availability, and the desire to start a project to grow as a
            developer.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "Projects",
    content: (
      <ul className="container-projects">
        <Project img="./images/dentist-page.png" title="Dentist Page" />
        <Project img="./images/more-info-app.png" title="React More Info" />
        <Project img="./images/React-Menu-App.png" title="React Menu App" />
        <Project img="./images/ice-cream.png" title="Ice Cream Page" />
        <Project img="./images/sacar presupuesto.png" title="Presupuesto" />
        <Project img="./images/Search-Tv-Show.png" title="Search Tv Show" />
      </ul>
    ),
  },
  {
    id: 2,
    title: "Contact",
    content: "form",
  },
];
export default sections;
