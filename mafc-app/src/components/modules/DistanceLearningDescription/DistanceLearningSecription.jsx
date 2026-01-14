import s from './distance_learning_decription.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { v4 } from 'uuid';
const DistanceLearningDescription = ({form_link, edu_platform})=> {

const {login_link, ref_link, title} = edu_platform;
    const linksToRender = [login_link, ref_link, {title: 'форма зворотнього звʼязку', url: form_link}];

    return (
        <section>
            <SectionWrapper>
                <h3 className={s.title}>{title}</h3>
                <ul className={s.link_box}>
                    {linksToRender?.map(link => <li key={v4()}>
                       
                        <a className={s.link} type='text/html' href={link?.url} target="_blank">{link?.title}</a>
                    </li>)}
                </ul>
            </SectionWrapper>
        </section>
    )
}

export default DistanceLearningDescription;