import { useState } from "react";
import Content from "./Content";
import sections from "./Data";
import "./Element.css";

const Element = () => {
  const [section, setSection] = useState([...sections]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSection(sections[e.target.value]);
  };

  return (
    <section className="container-portfolio">
      <div className="sections-bar">
        {sections.map((item, index) => {
          return (
            <button
              className="btn-section"
              value={item.id}
              onClick={handleChange}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <Content items={section} />
    </section>
  );
};

export default Element;
