'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./teacher_modal_card.module.scss";


const colors=['#f4c072','#51b282','#db6c62','#5d577d','#8a8a92', '#ff7f46','#00a0c1','#16697a','#c0eb34','#347aeb','#a243b5','#b54393','#bf2424']
const randomColor = ()=>{ const index = Math.floor(Math.random() * colors.length); return colors[index]};

export default function TecherModalCard({ person, onClose }) {

   const [gradientColor, setGradientColor] = useState("#000000");
  
 

  const teacherPhoto = person?.image?.url? person?.image?.url : '/default_teacher.png';
  const {name, position, birthday, specialty, experience, disciplines, qualification, professional_interests, credo, teacher_experience, education}= person.teacher_info;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

   useEffect(() => {
    setGradientColor(randomColor());
  }, []);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={person.id}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          layoutId={`image-${person.id}`}
          className={styles.modalImage}
          style={{ "--gradient-color": gradientColor }}
        >
          <img src={teacherPhoto} alt={name} />
        </motion.div>

        <div className={styles.modalContent} style={{ "--gradient-color": gradientColor }}>
          <div className={styles.title_box}>
            <motion.h2 layoutId={`name-${person.id}`}>{name}</motion.h2>
            <p>{credo}</p>
          </div>

          <div className={styles.main_info}>
            <p>дата народження:</p> <p>{birthday}</p>
            <p>Освіта:</p> <ul>
                            {education?.map(el=> <li key={el?.id}><p>{el?.institution}</p></li>)}

                          </ul>

            <p>Спеціальність за дипломом:</p><p>{specialty}</p>
            <p>Стаж педагогічної діяльності:</p><p>{experience}</p>
            <p>Викладаю  дисципліни:</p><p>{disciplines}</p>
            <p>Кваліфікаційна категорія, звання:</p><p>{qualification}</p>
            <p>Етапи педагогічної діяльності:</p> <ul>
                                                {teacher_experience?.map(el=> <li key={el?.id}><p>{el?.experience}</p></li>)}
                                                  </ul>

          </div>
          <div className={styles.card_footer}>
            <p>Коло професійних інтересів:</p>
            <p>{professional_interests}</p>

          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
}