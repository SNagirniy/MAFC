import SectionWrapper from "@/components/layouts/SectionWrapper";
import s from './news.module.scss';
import MainCard from "@/components/elements/MainCard/MainCard";
import NewsItem from "@/components/elements/NewsItem/NewsItem";
import truncate from "@/utils/turncate";
import Link from "next/link";
import FakeNews from "@/utils/fakeNews";

const News = ({title, subtitle})=> {
    return (
        <section className={s.section}>
            <SectionWrapper>
                <div className={s.center_box}>
                    <div className={s.head_container}>
                        <h2 className={s.title}>{title}</h2>
                        <p>{subtitle}</p>
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
                                slug={el.slug}
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