'use client'
import s from './student_card.module.scss';
import { useState, useEffect } from 'react';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';
import Instagram from '../../../../public/instagram.svg';
import Facebook from '../../../../public/facebook.svg';
import Tiktok from '../../../../public/tiktok.svg';
import Youtube from '../../../../public/youtube.svg';


const socialIcon ={
    facebook: <Facebook className={s.icon}/>,
    instagram: <Instagram className={s.icon}/>,
    tiktok: <Tiktok className={s.icon}/>,
    youtube: <Youtube className={s.icon}/>
}

const colors=['#f4c072','#51b282','#db6c62','#5d577d','#8a8a92', '#ff7f46','#00a0c1','#16697a','#c0eb34','#347aeb','#a243b5','#b54393','#bf2424']
const randomColor = ()=>{ const index = Math.floor(Math.random() * colors.length); return colors[index]};

const StudentCard =({studentInfo})=>{
       const [gradientColor, setGradientColor] = useState("#000000");

       const {name, position, description, mail, phone, image, social} = studentInfo
    
    useEffect(() => {
      setGradientColor(randomColor());
    }, []);

    return(
            <div className={s.card}>
                <div className={s.deco_border}>
                <div className={s.thumb}>
                    <ResponsiveImage formats={image?.formats} singleImgUrl={image?.url} alt={name} className={s.image}/>
                </div>
                </div>
                <div className={s.descr_box}>
                    <h4 style={{ "--gradient-color": gradientColor }} className={s.name}>{name}</h4>
                    <p className={s.position}>{position}</p>
                    <p className={s.description}>{description}</p>
                </div>
                <footer style={{ "--gradient-color": gradientColor }} className={s.footer}>
                    <a href={`mailto:${mail}`}>{mail}</a>
                    <a href={`tel:+${phone}`}>{phone}</a>
                    <ul className={s.social_list}>
                        {social?.map(el => 
                            <li key={el?.id}>
                                <a aria-label={el?.type} className={s.link} href={el?.link} target="_blank" >
                                    {socialIcon[el?.type]}</a>
                            </li>
                        )}
                    </ul>
                </footer>

            </div>

    )

}

export default StudentCard;