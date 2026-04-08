import s from './distance_learning_decription.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { v4 } from 'uuid';
import GridContainer from '../GridContainer/GridContainer';
import PersonContactCard from '@/components/elements/personContactCard/PersonContactCard';
const DistanceLearningDescription = ({form_link, edu_platform, persons_data_arr})=> {

const {login_link, ref_link, title} = edu_platform;
    const linksToRender = [login_link, ref_link, {title: 'форма зворотнього звʼязку', url: form_link}];

   
    return (
        <>
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
        <section>
              <GridContainer>
                    {
                        persons_data_arr?.map((person) => {
                            return <PersonContactCard card_title={'адміністратор мережі'} key={person?.id} personData={person}/>
                        })
                    }
                </GridContainer>
        </section>
        </>
    )
}

export default DistanceLearningDescription;