const Article = (props) => {
  return (
    <div className="ALLARTICLE">
      <img src={props.ArticleImage} alt="article"></img>
      <h2>{props.ArticleName}</h2>
      <p>{props.ArticleDate}</p>
    </div>
  );
};
export default Article