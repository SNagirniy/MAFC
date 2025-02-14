import SectionWrapper from "@/components/layouts/SectionWrapper";
import s from './news.module.scss';
import MainCard from "@/components/elements/MainCard/MainCard";
import NewsItem from "@/components/elements/NewsItem/NewsItem";
import truncate from "@/utils/turncate";
import Link from "next/link";



const FakeNews = [
    {
        slug: '1',
        createdAt: '01.01.2025',
        title: 'Most unusual uses of artificial intelli gence projects.',
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        imageUrl: '/poster.jpg'
    },
    {
        slug: '2',
        createdAt: '15.01.2025',
        title: 'Most unusual uses of artificial intelli gence projects.',
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        imageUrl: '/blog_01.jpg'
    },
    {
        slug: '3',
        createdAt: '22.01.2025',
        title: 'Most unusual uses of artificial intelli gence projects.',
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        imageUrl: '/blog_01.jpg'
    },
    {
        slug: '4',
        createdAt: '05.02.2025',
        title: 'Most unusual uses of artificial intelli gence projects.',
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        imageUrl: '/blog_01.jpg'
    }
]


const News = ()=> {
    return (
        <section className={s.section}>
            <SectionWrapper>
                <div className={s.center_box}>
                    <div className={s.head_container}>
                        <h2 className={s.title}>НАШ ГЕКТАР НОВИН</h2>
                        <p >КОЖЕН ДЕНЬ ЗАСІВАЄМО ІНФОРМАЦІЙНЕ ПОЛЕ!</p>
                    </div>
                
                    <ul className={s.news_list}>
                        {FakeNews.map((el, i)=> { 
                            const Card = i === 0? MainCard : NewsItem;
                            return (
                            <li key={el.slug}>
                             <Card 
                                date={el.createdAt}
                                title={el.title}
                                description={truncate(el.article, 110)}
                                imageUrl={el.imageUrl}
                                />
                            </li>
                                )})}
                    </ul>

                    <Link target="_self" className={s.more_button} href={'/news'}><span>Більше новин</span></Link>
                </div>
            </SectionWrapper>
        </section>
    )
};


export default News;