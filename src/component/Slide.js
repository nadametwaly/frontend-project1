import "../styles/slide.css";
import { Link } from "react-router-dom";
const Slide = ({ slide }) => {
  //console.log(props);
  return (
    <div className="slide-contanier">
      <div className="slide-card">
        <div className="meta">
          <div className="photo">
            <img src={slide.article.image} alt="" />
          </div>
        </div>
        <div className="description">
          <h1>{slide.article.title}</h1>
          <h2>{}</h2>
          <p>{slide.article.description}</p>
          <p className="read-more">
            <Link to={`/articles/${slide.id}`}>Read More</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
