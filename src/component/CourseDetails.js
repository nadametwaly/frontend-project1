import { useParams } from "react-router-dom";
import { courses } from "../utilities/courses";

const CourseDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}</div>;
};

export default CourseDetails;
