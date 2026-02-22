import s from './news_item.module.scss';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';
import Link from 'next/link';


const NewsItem = ({formats, title, date, description, imageUrl,documentId, categories})=> {

    const posterUrl = imageUrl? imageUrl : '/default_news.jpg'
   
        return (
        <article>
            <Link className={s.card} href={`/news/${documentId}`}>
            <div className={s.thumb}>
                <ResponsiveImage formats={formats} alt={title} className={s.image} singleImgUrl={posterUrl}/>
            </div>
            <div className={s.description_box}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.description}>{description}</p>
                <span className={s.date}>{date}</span>
                <ul className={s.category_list}>
                    {categories?.map(c => <li id={c?.code}><span  className={s.category_desc}>{c?.description}</span></li>)}

                </ul>
                
                
            </div>
            </Link>
        </article>
        )

}

export default NewsItem;