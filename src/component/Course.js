import { Link } from "react-router-dom";

const Course = (props) => {
  return (
    <div className="course-contanier">
      <div className="img">
        <img id ='img' src="https://images.ctfassets.net/be04ylp8y0qc/6rvh9VwMd69EffYHq2AX2o/9cf6f4eaa592679e9c27c526e3139d77/opencv_square.png?fm=webp&w=510&h=510" alt="course logo"/>
     </div>
      <h2 id="tit">{props.title }</h2> 
      <h3 id="inst">{ props.instructor }</h3>

    
    </div>
  );
};

export default Course;