import s from './allnews.module.scss';
import MainCard from "@/components/elements/MainCard/MainCard";
import formatPreviewText from "@/utils/formatted_text";
import extractImageSourcesFromHTML from "@/utils/extractImageSourcesFromHTML";



const AllNews = ({news_list})=> {
    return (
                    <ul className={s.news_list}>
                        {news_list?.map((el, i)=> { 
                            const {date, title, article, images, videos, category, documentId} = el;
                            const imageFormats = images? images[0]?.formats : null;
                           const videoThunbnail = videos.length > 0? [`https://img.youtube.com/vi/${videos[0]?.video_id}/hqdefault.jpg`]: [];
                           const imagesFromHTML = extractImageSourcesFromHTML(article);

                            const posterUrl = [...videoThunbnail, ... imagesFromHTML];
                            return (
                            <li key={documentId}>
                             <MainCard 
                                date={new Date(date).toLocaleDateString('uk-UA')}
                                title={title}
                                description={formatPreviewText(article)}
                                formats={imageFormats}
                                imageUrl={posterUrl[0]}
                                slug={category.code}
                                documentId={documentId}
                                category_desc={category.description}
                                />
                            </li>
                                )})}
                    </ul>
    )
};


export default AllNews;