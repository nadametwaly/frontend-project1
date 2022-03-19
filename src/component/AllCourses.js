import { useState } from "react";
import { courses } from "../utilities/courses";
import Course from "./Course";
import { Link } from "react-router-dom";

const AllCourses = () => {
  return (
    <div className="all-courses-contanier">
      {courses.map((item) => (
        <Link to={`/courses/${item.id}`}>
          <Course {...item} key={item.id} />
        </Link>
      ))}
    </div>
  );
};

export default AllCourses;
