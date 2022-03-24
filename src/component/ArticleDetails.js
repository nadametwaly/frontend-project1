import articles from "../utilities/AllArticles"
import {useParams} from "react-router-dom";

const ArticleDetails = () => {
const params = useParams();
    return (
    <div>
        {articles[params.id - 1].article.title}
    </div>
    );
};
 
export default ArticleDetails;