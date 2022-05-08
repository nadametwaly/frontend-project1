import React from 'react'

  const Course = (props) => {
    return (
      <div className="course-contanier">
        <div className="img">
          <img
            id="img"
            src={props.attributes.image}
            alt="course logo"
          />
        </div>
        <h2 id="tit">{props.attributes.title}</h2>
        <h3 id="inst">{props.attributes.instructor}</h3>
      </div>
    );
  };
  
export default Course;