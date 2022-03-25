import { courses } from "../utilities/courses";
import Course from "./Course";
import { Link } from "react-router-dom";
import "../styles/Courses.css";

const AllCourses = () => {
  return (
    <div className="all-courses-contanier">
      {courses.map((item) => (
        <Link to={`/courses/${item.id}`}>
          <Course {...item.course} key={item.id} />
        </Link>
      ))}
    </div>
  );
};

export default AllCourses;
