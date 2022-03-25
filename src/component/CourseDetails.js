import { useParams } from "react-router-dom";
import { courses } from "../utilities/courses";

const CourseDetails = () => {
  const params = useParams();
  return(
   <div className="details">
        <div className="detail">
        
            <div className="title">
                {courses[params.id - 1].course.title}
            </div>

            <div className="im-desc">
                    <div >
                        <img id="image" src="https://images.ctfassets.net/be04ylp8y0qc/6rvh9VwMd69EffYHq2AX2o/9cf6f4eaa592679e9c27c526e3139d77/opencv_square.png?fm=webp&w=510&h=510" alt="course logo"/>
                    </div>
                    <div className="description">
                      <h3 id="TOD">Description</h3>
                      {courses[params.id - 1].course.description}
                    </div>
              </div>
              
            <div className="content">
              <h3 id="TOD">Content</h3>
              {courses[params.id - 1].course.content}
            </div>
            <div className="perquisittes">
              <h3 id="TOD">Prerequisites</h3>
              {courses[params.id - 1].course.perquisittes}
            </div>

            <div className="instructor">
              <h3 id="TOD">Instructor</h3>
              {courses[params.id - 1].course.instructor}
            </div>
            
            <div className="duration">
              <h3 id="TOD">Duration :</h3>
              {courses[params.id - 1].course.duration}
            </div>

            <div className="fees">
              <h3 id="TOD">Fees :</h3>
              {courses[params.id - 1].course.fees}
              </div>   
               
            <div id="button-container">
            <button id="button">Sign Up</button>
            </div>
            
        </div>
  </div>
    );
};

export default CourseDetails;