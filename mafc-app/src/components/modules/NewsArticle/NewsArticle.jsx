
import s from './news_article.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Gallery from '@/components/elements/gallery/Gallery';
import BackButton from '@/components/elements/backButton/BackButton';

const NewsArticle=({post})=>{

    const {title,date, article, images, videos, category}=post;
    
    const imagesArr = images? images : [];
    const videosArr = videos? videos : [];
    const mediaArr = [...imagesArr, ...videosArr];

    return(
        <section className={s.section}>
            <SectionWrapper>
                <BackButton/>
                <article className={s.article}>
                    {category && <span className={s.category_desc}>{category?.description}</span>}
                    <h2 className={s.main_title}>
                        {title}
                    </h2>
                    <p className={s.date}>{new Date(date).toLocaleDateString('uk-UA')}</p>
                    {mediaArr.length > 0 && <Gallery imageArr={mediaArr}/>}
                    {article && <div className="ck-content" dangerouslySetInnerHTML={{__html: article}}></div>}
                </article>
            </SectionWrapper>
        </section>
    )

};


export default NewsArticle;