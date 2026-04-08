import s from './student_government_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import StudentCard from '@/components/elements/studentCard/StudentCard';

const StudentGovernmentSection =({stud_list, title}) => {

    if(!stud_list || stud_list?.length === 0) return null;
    return(
        <section>
            <SectionWrapper>
               {title && <h3 className={s.title}>{title}</h3>}
               <ul className={s.list}>
                    {
                        stud_list?.map((item)=> {
                            return(
                                <li className={s.list_item} key={item?.id}>
                                        <StudentCard studentInfo={item}/>
                                </li>
                            )
                        })
                    }
               </ul>
            </SectionWrapper>
        </section>
    )
};

export default StudentGovernmentSection;
