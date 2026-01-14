import s from './extracurricular_actividy_cards_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Link from 'next/link';
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';
import extractImageSourcesFromHTML from '@/utils/extractImageSourcesFromHTML';


const ActivityCard = ({el})=> {
    const {title, poster, description} = el?.activity;

    const imagesFromHTML = extractImageSourcesFromHTML(description);
    const posterUrl = [ ... imagesFromHTML];
    return(

        <Link className={s.link} href={`/student_life/extracurricular_activities/${el?.documentId}`}>
            <div className={s.thumb}>
                <ResponsiveImage 
                className={s.image}
                formats={poster?.formats}
                alt={title}
                singleImgUrl={poster?.url || posterUrl[0]}/>
            </div>
            <div className={s.title_box}>
                <h4 className={s.activity_title}>{title}</h4>
            </div>
        </Link>
    )
}


const ExtracurricularActividyCardsSection =({activities})=> {
    if(!activities) return null;

return(
    <section>
        <SectionWrapper>
            <ul className={s.list}>
                {activities?.map((el)=> {
                    return(
                    <li key={el?.id}>
                        <ActivityCard el={el}/>
                    </li>)
                })}
            </ul>
        </SectionWrapper>
    </section>
)

};

export default ExtracurricularActividyCardsSection;