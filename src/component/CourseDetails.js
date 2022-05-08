import { useParams } from "react-router-dom";
import React ,{useEffect, useState} from 'react';
import axios from "axios";

const CourseDetails = () => {
const params= useParams()

const [course, setcourse] = useState([])
const url = `https://ieeeswalexsc.herokuapp.com/api/courses/${params.id}`

  const getData = () => {
    axios.get(url)
        .then((res) => {
      //    console.log(res.data.data)
          setcourse(res.data.data.attributes);             
        })
        .catch((error) => {
          console.log(error);
        })
    }

  useEffect(() => {
    getData()
  }, [])

  //console.log(course)
return(
   <div className="details">
      <div className="detail">
            <div className="title">
                {course.title}
            </div>

            <div className="im-desc">
                    <div>
                        <img id="image" src={course.image} alt="course logo"/>
                    </div>
                    <div className="description">
                      <h3 id="TOD">Description</h3>
                      {course.description}
                    </div>
              </div>
              
            <div className="cod">
              <h3 id="TOD">Content</h3>
              {course.content}
            </div>
            <div className="cod">
              <h3 id="TOD">Prerequisites</h3>
              {course.prerequisites}
            </div>

            <div className="cod">
              <h3 id="TOD">Instructor</h3>
              {course.instructor}
            </div>
            
            <div className="cod">
              <h3 id="TOD">Duration :</h3>
              {course.length} Hours
            </div>

            <div className="cod">
              <h3 id="TOD">Fees :</h3>
              {course.fees} $
              </div>   
               
            
            <button id="button">Sign Up</button>
            
            
        </div>

  </div>
    );
};

export default CourseDetails;