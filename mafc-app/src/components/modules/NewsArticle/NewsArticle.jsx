import s from './news_article.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Image from 'next/image';

const ex= {
    slug: '1',
    createdAt: '01.01.2025',
    title: 'Most unusual uses of artificial intelli gence projects.',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    imageUrl: '/poster.jpg'
};

const NewsArticle=({post})=>{

    const {title, article, imageUrl, createdAt}=post;

    return(
        <section className={s.section}>
            <SectionWrapper>
                <article className={s.article}>
                    <h2 className={s.main_title}>
                        {title}
                    </h2>
                    <p className={s.date}>{createdAt}</p>
                    <div className={s.thumb}>
                        <Image alt={title} className={s.image} src={imageUrl} width={500} height={100} priority/>
                    </div>
                    <p className={s.article_body}>{article}</p>
                </article>
            </SectionWrapper>
        </section>
    )

};


export default NewsArticle;