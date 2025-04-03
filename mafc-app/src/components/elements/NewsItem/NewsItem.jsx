import s from './news_item.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const NewsItem = ({title, date, description, imageUrl, slug})=> {
   
        return (
        <article>
            <Link className={s.card} href={`/news/${slug}`}>
            <div className={s.thumb}>
                <Image src={imageUrl} alt='poster' width={100} height={50} className={s.image}/>
            </div>
            <div className={s.description_box}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.description}>{description}</p>
                <span className={s.date}>{date}</span>
            </div>
            </Link>
        </article>
        )

}

export default NewsItem;