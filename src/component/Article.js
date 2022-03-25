import { Link } from "react-router-dom";

const Article = (props) => {
    return (  
        <div className="ALLARTICLE">
            <img src={props.image}></img>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
        </div>
     
    );
}
 
export default Article;