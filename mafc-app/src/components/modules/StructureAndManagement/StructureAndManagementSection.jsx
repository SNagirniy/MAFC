import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './structure_and_management.module.scss';
import TeacherCard from '@/components/elements/teacherCard/TeacherCard';


const StructureAndManagementSection = ({title, personsDataArray})=> {
if(!personsDataArray || personsDataArray?.length === 0) return null;
    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>{title}</h3>
            <ul className={s.list}>

                {personsDataArray?.map((teacher)=> {
                   
                    const url = teacher?.image?.url? teacher?.image?.url : '/default_teacher.png';
                    const {name, mail, position, phone}= teacher?.teacher_info;
                    
                    return(
                        <li key={teacher?.id} className={s.item}>
                            <TeacherCard 
                            name={name}
                            viewImageSrc={url}
                            position={position}
                            mail={mail}
                            phone={phone}
                            description={teacher?.description}
                            consultation={teacher?.consultations}/>
                        </li>
                    )
                })}
                
            </ul>
            </SectionWrapper>
        </section>
    )
};


export default StructureAndManagementSection;

