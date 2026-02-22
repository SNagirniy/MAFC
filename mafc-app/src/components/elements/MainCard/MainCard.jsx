
import s from './main_carf.module.scss';
import Link from 'next/link';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';


const MainCard = ({formats, title, date, description, imageUrl, documentId, categories})=> {

    return (
        <article className={s.card}>
            <Link href={`/news/${documentId}`}>
        <div className={s.thumb}>
            <ResponsiveImage formats={formats} alt={title} className={s.image} singleImgUrl={imageUrl || '/default_news.jpg'}/>
            <ul className={s.category_list}>
                    {categories?.map(c => <li id={c?.code}><span  className={s.category_desc}>{c?.description}</span></li>)}

                </ul>
        </div>
        <div className={s.description_box}>
            <span className={s.date}>| {date}</span>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
            <span className={s.btn}>Читати далі
            </span>
        </div>
        </Link>
    </article>
    )
}

export default MainCard;