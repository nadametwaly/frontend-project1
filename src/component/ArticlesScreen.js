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
