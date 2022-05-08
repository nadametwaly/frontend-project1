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
        <h3 id="fee"> E£ {props.attributes.fees}</h3>
        <h1 id="best">BestSeller</h1>

        <div className='ratting'>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star "></span>
              <h5 > 4.7</h5>
              <h6> (490) Student</h6>
        </div>
    
      </div>
    );
  };
  
export default Course;