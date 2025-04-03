import SectionWrapper from "@/components/layouts/SectionWrapper";
import s from './allnews.module.scss';
import MainCard from "@/components/elements/MainCard/MainCard";
import truncate from "@/utils/turncate";
import FakeNews from "@/utils/fakeNews";


const AllNews = ()=> {
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
                            return (
                            <li key={el.slug}>
                             <MainCard 
                                date={el.createdAt}
                                title={el.title}
                                description={truncate(el.article, 110)}
                                imageUrl={el.imageUrl}
                                slug={el.slug}
                                />
                            </li>
                                )})}
                    </ul>

                </div>
            </SectionWrapper>
        </section>
    )
};


export default AllNews;