
import React ,{useEffect, useState} from 'react'
import Course from "./Course";
import { Link } from "react-router-dom";
import '../styles/Courses.css'
import axios from "axios";


const AllCourses = () => {
const url = 'https://ieeeswalexsc.herokuapp.com/api/courses'

const [courses, setcourses] = useState([])


  const getData = () => {
  axios.get(url)
      .then((res) => {
        console.log(res.data.data);
        setcourses(res.data.data);             
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
  getData()
  }, [url])

  console.log(courses)

  return ( 

     <div className="all-courses-contanier">
                {courses.map((item) => (
          <Link to={`/courses/${item.id}`} >
        <Course {...item} key={item.id} />

        </Link>
      ))}
    </div>
  );
};

export default AllCourses;
