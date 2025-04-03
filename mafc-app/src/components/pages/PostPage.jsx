import FakeNews from "@/utils/fakeNews";
import NewsArticle from "../modules/NewsArticle/NewsArticle";


const PostPage= async ({slug})=> {

    const article = FakeNews.filter((post)=> post.slug === slug);

    return <NewsArticle post={article[0]} />

};

export default PostPage;