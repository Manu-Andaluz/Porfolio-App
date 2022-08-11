import "./Content.css";

const Content = ({ items }) => {
  return (
    <div className="section-content">
      <div className="title">
        <h2>{items.title}</h2>
      </div>
      <div className="content">
        <p>{items.content}</p>
      </div>
    </div>
  );
};

export default Content;
