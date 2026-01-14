import s from './entrants_general_info.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import NumberedList from '@/components/elements/NumberedList/NumberedList';


const EntrantsGeneralInfo =({entranceDocList})=> {
    return (
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.title}>Перелік документів для вступу</h3>
                <div className={s.container}>
                   <NumberedList list_to_render={entranceDocList}/>   
                </div>
            </SectionWrapper>
        </section>
    )
};


export default EntrantsGeneralInfo;