
import s from './activity_article.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import BackButton from '@/components/elements/backButton/BackButton';

const ActivityArticle=({activity})=>{
    

    const {title, description}=activity;

    return(
        <section className={s.section}>
            <SectionWrapper>
                <BackButton/>
                <article className={s.article}>
                    <h2 className={s.main_title}>
                        {title}
                    </h2>
                    {description && <div className="ck-content" dangerouslySetInnerHTML={{__html: description}}></div>}
                </article>
            </SectionWrapper>
        </section>
    )

};


export default ActivityArticle;