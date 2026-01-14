
import s from './edu_program.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import ProfesionDescription from '@/components/elements/ProfesionDescription/ProfesionDescription';



const EducationalProgramDetail =({profession})=> {

    return(
        <section className={s.section}>
            <SectionWrapper>
                <ProfesionDescription profesion={profession} />
            </SectionWrapper>
        </section>
    )
};

export default EducationalProgramDetail;


