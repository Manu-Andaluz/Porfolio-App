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
        <div class="contact-links">
          <a
            href="https://github.com/Manu-Andaluz"
            target="_blank"
            class="contact_link"
          >
            <i class="fa-brands fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-andaluz"
            target="_blank"
            class="contact_link"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/_manuppe/"
            target="_blank"
            class="contact_link"
          >
            <i class="fa-brands fa-instagram-square"></i>
          </a>
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
      <section className="contact">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Menssage" className="menssage" />
          <button className="contact-btn">
            Enviar <span>&rarr;</span>
          </button>
        </form>
      </section>
    ),
  },
];
export default sections;
