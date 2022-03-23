import "../styles/ArticlesScreen.css";
import articles from "../utilities/AllArticles"
import { render } from "@testing-library/react";
import Article from "./Article";
import { Link } from "react-router-dom";

const ArticlesScreen = () => {
  const ListArticles =
  render()
    return (
      <div className="All-Articles-Container">
        <h1>OUR ARTICLES</h1>
        {articles&& articles.map(item =>{
    return(
      <Link to={`/articles/${item.id}`}>
      <div key={item.id}>
        <Article {...item}/>
      </div>
      </Link>
    );
  })}
      </div>
    );
  };
 

  export default ArticlesScreen;
