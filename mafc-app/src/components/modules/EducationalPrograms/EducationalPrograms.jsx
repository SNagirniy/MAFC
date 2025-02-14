'use client'
import s from './edu_program.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import professions from '@/utils/professions';
import ProfesionsRadioPanel from '@/components/elements/profesionsRadioPanel/ProfesionsRadioPanel';
 import Image from 'next/image';

 import { useSearchParams } from 'next/navigation';



const EducationalPrograms = ()=> {

    const searchParams = useSearchParams();

    const professionParam = searchParams.get('profession');

    const {title, code, discipline, educational_program, description, term_of_study, tuition_fees, image} = professions[professionParam];

    return(
        <section className={s.section}>
            <SectionWrapper>
            <h2 className={s.main_title} >Напрямки освітньої діяльності</h2>
            <div className={s.view_container}>
                <ProfesionsRadioPanel/>

                <div className={s.profesion_wrapper}> 
                <div className={s.thumb}>
                    <Image 
                    className={s.image}
                    src={image} alt={educational_program}
                    width={150}
                    height={100}/>
                </div>
                <div className={s.detail}>
                    <p> Галузь знань
                        <span>{discipline.code} {discipline.definition}</span>
                    </p>
                    <p>Спеціальність
                        
                        <span>{code} {title}</span>
                    </p>
                    <p>ОПП
                        <span>{educational_program}</span>
                    </p>
                    <p>
                        Термін навчання
                        <span>{term_of_study}</span>
                    </p>
                    <p>
                        Вартість одного року навчання
                        <span>{tuition_fees}грн</span>
                    </p>
                </div>

                <p className={s.description}>
                    {description}
                </p>

                </div>

            </div>
            </SectionWrapper>
        </section>
    )
};

export default EducationalPrograms;


