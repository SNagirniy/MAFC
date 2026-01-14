import s from './speciality_rating_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';




const SpecialityRatingSection = ({children})=> {

    return(
        <section className={s.section}>
            <SectionWrapper>
            <h2 className={s.main_title} >рейтинг за спеціальностями</h2>
            {children}
            </SectionWrapper>
        </section>
    )
};

export default SpecialityRatingSection;

