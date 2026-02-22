'use client'
import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './structure_and_management.module.scss';
import { useState } from 'react';
import TeacherCard from '@/components/elements/teacherCard/TeacherCard';
import TecherModalCard from '@/components/elements/teacherModalCard/TeacherModalCard';
import { AnimatePresence } from "framer-motion";


const StructureAndManagementSection = ({title, personsDataArray})=> {
    const [activePerson, setActivePerson] = useState(null);
if(!personsDataArray || personsDataArray?.length === 0) return null;

    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>{title}</h3>
            <ul className={s.list}>

                {personsDataArray?.map((teacher)=> {    
                    const url = teacher?.image?.url? teacher?.image?.url : '/default_teacher.png';
                    const {name, position, qualification}= teacher?.teacher_info;
                    
                    return(
                        <li key={teacher?.id} className={s.item}>
                            <TeacherCard 
                            id={teacher?.id}
                            name={name}
                            viewImageSrc={url}
                            position={position}
                            qualification={qualification}
                            onClick={() => setActivePerson(teacher)}
                            />
                        </li>
                    )
                })}
                
            </ul>
            <AnimatePresence>
        {activePerson && (
          <TecherModalCard
            person={activePerson}
            onClose={() => setActivePerson(null)}
          />
        )}
      </AnimatePresence>
            </SectionWrapper>
        </section>
    )
};


export default StructureAndManagementSection;

