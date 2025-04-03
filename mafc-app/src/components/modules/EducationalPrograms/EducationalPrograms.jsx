'use client'
import s from './edu_program.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import ProfesionsRadioPanel from '@/components/elements/profesionsRadioPanel/ProfesionsRadioPanel';
import ProfesionDescription from '@/components/elements/ProfesionDescription/ProfesionDescription';



const EducationalPrograms =({currentProfession, professions})=> {


    return(
        <section className={s.section}>
            <SectionWrapper>
            <h2 className={s.main_title} >Напрямки освітньої діяльності</h2>
            <div className={s.view_container}>
                <ProfesionsRadioPanel professions={professions}/>
                <ProfesionDescription profesion={professions[currentProfession]} />
                
            </div>
            </SectionWrapper>
        </section>
    )
};

export default EducationalPrograms;


