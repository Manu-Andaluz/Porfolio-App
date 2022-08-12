import { useState } from "react";
import Content from "./Content";
import sections from "./Data";
import "./Element.css";

const Element = ({ item }) => {
  const [section, setSection] = useState(item[0]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSection(item[e.target.value]);
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
