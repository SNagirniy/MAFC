import s from './profesions.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import ProfesionCard from '@/components/elements/profesionCard/ProfesionCard';
import { v4 } from 'uuid';
import professions from '@/utils/professions';



const Profesions = ()=> {

    const professions_list= Object.keys(professions);

    return (
        <section className={s.section}>
            <SectionWrapper>
                <div className={s.center_box}>
                    <div className={s.head_container}>
                        <h2 className={s.title}>Фахова Теплиця</h2>
                        <p >тут проростають майбутні професіонали</p>
                    </div>
                
                    <ul className={s.list}>
                        {professions_list.map((el,i)=>{
                           
                            const {title, code, educational_program,discipline,description,image} = professions[el]
                            const isRightAlihgn = i%2 === 0? false : true;

                                return(
                                    <li className={s.item} key={v4()}>
                                        <ProfesionCard 
                                        title={title}
                                        code={code}
                                        educational_program={educational_program}
                                        discipline={discipline}
                                        description={description}
                                        image={image}
                                        isRightAlihgn={isRightAlihgn}
                                        slug={el}
                                        />
                                    </li>
                                )
                        })}
                    </ul>
                </div>
            </SectionWrapper>
        </section>
    )
};

export default Profesions;