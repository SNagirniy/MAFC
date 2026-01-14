
import NewsArticle from "../modules/NewsArticle/NewsArticle";


const PostPage= async ({newsItem})=> {
    if(!newsItem) return null;

    return <NewsArticle post={newsItem} />

};

export default PostPage;