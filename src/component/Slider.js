import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import Slide from "./Slide";
import  articles  from "../utilities/AllArticles";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [activeArrow, setActiveArrow] = useState("");
  const length = articles.length;
  useEffect(() => {
    const interval = setInterval(changeSlide, 10000);
    return () => clearInterval(interval);
  });

  const changeSlide = () => {
    const lastIndex = length - 1;
    setCurrent((current) => {
      return current === lastIndex ? 0 : current + 1;
    });
  };

  const goToPreviousSlide = () => {
    setActiveArrow("left");
    const newPosition = current === 0 ? length - 1 : current - 1;
    setCurrent(newPosition);
  };

  const goToNextSlide = () => {
    setActiveArrow("right");
    const newPosition = current === length - 1 ? 0 : current + 1;
    setCurrent(newPosition);
  };

  return (
    <section className="slider">
      <div className="left-arrow" onClick={goToPreviousSlide}>
        <BsArrowLeftCircleFill className="arrow" />
      </div>

      <div className="right-arrow" onClick={goToNextSlide}>
        <BsArrowRightCircleFill className="arrow" />
      </div>
      <div className="slider-contanier">
        <div className="slider-wrapper">
          {articles.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && <Slide slide={slide} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
