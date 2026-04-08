'use client'
import s from './entrants_road_map.module.scss';
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';
import { useState, useEffect } from 'react';

const colors=['#f4c072','#51b282','#db6c62','#5d577d','#8a8a92', '#ff7f46','#00a0c1','#16697a','#c0eb34','#347aeb','#a243b5','#b54393','#bf2424']
const randomColor = ()=>{ const index = Math.floor(Math.random() * colors.length); return colors[index]};

const RoadMapItem =({el,i})=> {
    const [itemColor, setItemColor] = useState("#000000");
const {title, icon, markdown, date, id } = el;

  useEffect(() => {
    setItemColor(randomColor());
  }, []);
return(
     <li className={s.list_item}  key={id}>
                            <div style={{ "--item-color": itemColor }} className={s.thumb_wrapper}>
                                <div style={{ "--item-color": itemColor }} className={s.thumb}>
                                    
                                    <ResponsiveImage 
                                        formats={icon?.formats}
                                        singleImgUrl={icon?.url}
                                        alt={title}
                                        className={s.icon}/>
                                        
                                </div>
                            </div>
                            <div style={{ "--item-color": itemColor }} className={s.text_box}>
                                <h4>етап {i+1}: {title}</h4>
                                <p>{date}</p>
                                <div className="ck-content" dangerouslySetInnerHTML={{ __html: markdown }}></div>
                            </div>
                        </li>
)
}

export default RoadMapItem