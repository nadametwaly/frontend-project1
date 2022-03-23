import { Link } from "react-router-dom";

const Article = (article) => {
    return (  
        <div className="ALLARTICLE">
            <img src={article.article.image}></img>
            <h2>{article.article.title}</h2>
            <p>{article.article.date}</p>
        </div>
     
    );
}
 
export default Article;