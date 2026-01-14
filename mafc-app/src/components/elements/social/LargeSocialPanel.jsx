import s from './social.module.scss';
import socialLinks from '@/utils/social';
import { v4 } from 'uuid';
import SectionWrapper from '@/components/layouts/SectionWrapper';



const LargeSocialPanel = ({title})=> {


    return(
        <section>
            <SectionWrapper>
                <h3 className={s.title}>{title}</h3>
                <ul className={s.large_social_list}>
                {socialLinks?.map(({icon,url, alt})=> {return (
                <li key={v4()}>
                    <a aria-label={alt} className={s.link} href={url} target="_blank" >
                    {icon(s.icon)}
                    </a>
                </li>
            )})}
                </ul>
            </SectionWrapper>
        </section>
    )
}

export default LargeSocialPanel;