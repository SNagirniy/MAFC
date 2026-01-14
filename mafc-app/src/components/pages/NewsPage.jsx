import AllNews from "../modules/allNews/AllNews";
import NewsLayoutModule from "../modules/NewsLayoutModule/NewsLayoutModule";
import NewsPagination from "../modules/newsPagination/NewsPagination";



const NewsPage = ({news, categories, selectedCategory, totalPages, currentPage})=>{
return (
    <NewsLayoutModule categories={categories} selectedCategory={selectedCategory}>
         <AllNews news_list={news}/>
         <NewsPagination totalPages={totalPages} currentPage={currentPage} category={selectedCategory}/>
    </NewsLayoutModule>
   
)
};

export default NewsPage;