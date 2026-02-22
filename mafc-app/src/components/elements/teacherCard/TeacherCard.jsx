'use client'
import s from './teacher_card.module.scss';
import { motion } from "framer-motion";
import { useState,useEffect } from 'react';

const colors=['#f4c072','#51b282','#db6c62','#5d577d','#8a8a92', '#ff7f46','#00a0c1','#16697a','#c0eb34','#347aeb','#a243b5','#b54393','#bf2424']
const randomColor = ()=>{ const index = Math.floor(Math.random() * colors.length); return colors[index]};


const TeacherCard = ({name, viewImageSrc, position, id, onClick, qualification})=> {
    const [gradientColor, setGradientColor] = useState("#000000");

useEffect(() => {
  setGradientColor(randomColor());
}, []);

const teacherPhoto = viewImageSrc? viewImageSrc : '/default_teacher.png';


    return(
        
        <motion.div className={s.card}
                    layoutId={`card-${id}`}
                    onClick={onClick}>
        
                    <motion.div layoutId={`image-${id}`}  className={s.thumb} style={{background: `linear-gradient(to top, ${gradientColor} 70%,     transparent         70%)`}}>
                        <img className={s.image} src={teacherPhoto} alt="teacher" />
                    </motion.div >
                    <div className={s.article}>
                        <motion.h4 layoutId={`name-${id}`} className={s.name}>{name?.toLowerCase()}</motion.h4>
                        <p>{position}</p>
                        <p>{qualification}</p>
                
                    </div>
        </motion.div>
       
    )
};

export default TeacherCard;
