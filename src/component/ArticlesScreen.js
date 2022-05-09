import "../styles/ArticlesScreen.css";
import articles from "../utilities/AllArticles";
import Article from "./Article";
import { Link } from "react-router-dom";

const ArticlesScreen = () => {
  return (
    <div className="All-Articles-Container">
      <h1>OUR ARTICLES</h1>
      {articles &&
        articles.map((item) => (
          <Link to={`/articles/${item.id}`}>
            <Article key={item.id} {...item.article} />
          </Link>
        ))}
    </div>
  );
};

export default ArticlesScreen;



import "../styles/ArticlesScreen.css";
import Article from "./Article";
import { Link } from "react-router-dom";
import {useAxiosGet} from "../utilities/ArticlesAPI";



const ArticlesScreen = () => {
      const url = 'https://ieeeswalexsc.herokuapp.com/api/articles?fbclid=IwAR1B-STtn7QhwhJdusHZA_uaJ8DWqwr4QRFB7V7v2cvpF3Jin6C4MjxOqGc'
      let content = null
      let Result = useAxiosGet(url)
      if (Result.error){
        content = <p>Error 404</p>
        }
        if (Result.data){
        content =
        <div className="Articles-Container">
           
           {Result.data.data.map((EachArticle, key) =>
           <Link to={`/articles/${EachArticle.id}`}>
              <Article
                ArticleImage = {EachArticle.attributes.image}
                ArticleName = {EachArticle.attributes.author}
                ArticleDate={EachArticle.attributes.publishedAt}
                idkey = {EachArticle.id} />
            </Link>
           )}
        </div>
        }
          
        return (
          <div className="All-Articles-Container">
            <h1>OUR ARTICLES</h1>
            {content}
          </div>
  );
};

export default ArticlesScreen;
  /*{articles &&
        articles.map((item) => (
          <Link to={`/articles/${item.id}`}>
            <Article key={item.id} {...item.article} />
          </Link>
        ))}*/
