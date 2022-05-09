import articles from "../utilities/AllArticles";
import "../styles/ArticleDetails.css";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();
  let content = null
      let Result = useAxiosGet(url)
      if (Result.error){
        content = <p>Error 404</p>
        }
        if (Result.data){
        content =
        <div className="ArticleDetails">
           
           {Result.data.data.map((EachArticle, key) =>
           
           )}
        </div>

  return (
    <div className="AllArticleDetails">
      <br></br> <br></br>
      <div className="ArticleDetails">
        <img src={articles[params.id - 1].article.image} alt="article"></img>
        <h2>{articles[params.id - 1].article.title}</h2>
        <p>{articles[params.id - 1].article.description}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
