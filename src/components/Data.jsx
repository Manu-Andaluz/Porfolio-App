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
        <Project
          img="./images/dentist-page.png"
          title="Dentist Page"
          link="https://manu-andaluz.github.io/dentist-page/"
        />
        <Project
          img="./images/more-info-app.png"
          title="React More Info"
          link="https://frequent-questions-g9mfm63t6-manu-andaluz.vercel.app/"
        />
        <Project
          img="./images/React-Menu-App.png"
          title="React Menu App"
          link="https://manu-andaluz.github.io/React-Menu-App/"
        />
        <Project
          img="./images/ice-cream.png"
          title="Ice Cream Page"
          link="https://manu-andaluz.github.io/IceCream-WebPage/"
        />
        <Project
          img="./images/sacar presupuesto.png"
          title="Presupuesto"
          link="https://manu-andaluz.github.io/IceCream-WebPage/"
        />
        <Project
          img="./images/Search-Tv-Show.png"
          title="Search Tv Show"
          link="https://manu-andaluz.github.io/Search-TvShow/"
        />
      </ul>
    ),
  },
  {
    id: 2,
    title: "Contact",
    content: (
      <form className="contact-form">
        <h2>Form</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Menssage" className="menssage" />
        <button className="contact-btn">
          Enviar <span>&rarr;</span>
        </button>
      </form>
    ),
  },
];
export default sections;
