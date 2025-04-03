'use client'
import s from './speciality_rating_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import ProfesionsRadioPanel from '@/components/elements/profesionsRadioPanel/ProfesionsRadioPanel';



const SpecialityRatingSection = ({professions,children})=> {

    return(
        <section className={s.section}>
            <SectionWrapper>
            <h2 className={s.main_title} >рейтинг за спеціальностями</h2>
            <div className={s.view_container}>
                <ProfesionsRadioPanel professions={professions}/>
            </div>
            {children}
            </SectionWrapper>
        </section>
    )
};

export default SpecialityRatingSection;

