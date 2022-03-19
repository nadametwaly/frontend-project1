import { Link } from "react-router-dom";

const Course = (props) => {
  return (
    <div className="course-contanier">
      <h1>{props.title}</h1>
      <p>{props.feeds}</p>
    </div>
  );
};

export default Course;
