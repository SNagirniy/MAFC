import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './government_resourses.module.scss';
import { v4 } from "uuid";
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';



const GovernmentResourses =({linkArray})=> {
    return(
        <section className={s.section}>
            <SectionWrapper>
                <ul className={s.list}>
                    {linkArray?.map(({title, image, link})=> {
                        return(
                        <li className={s.item} key={v4()}>
                            <a className={s.link} target="_blank"  rel="noopener" href={link} >
                                <div className={s.thumb}>
                                    <ResponsiveImage 
                                        formats={image?.formats} 
                                        alt={title} 
                                        className={s.icon} 
                                        singleImgUrl={image?.url}/>
                                </div>
                                <p className={s.title}>{title.toLocaleUpperCase()}</p>
                            </a>
                        </li>)
                    })}

                </ul>

            </SectionWrapper>
        </section>
    )
};

export default GovernmentResourses;