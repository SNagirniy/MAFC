'use client'

import s from './distance_learning_video_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { useState } from 'react';
import clsx from 'clsx';
import YouTubeVideoGallery from '../YouTubeVideoGallery/YouTubeVideoGallery';



const DistanceLearningVideoSection = ({video_section, title})=> {
   const[audience, setAudience] = useState(video_section?.[0]?.audience);


  
   
     const handleClick = (e)=>{
    const {value} = e.currentTarget;
    setAudience(value)
   }

   const VideoListToRender = video_section?.find(el => el?.audience === audience);



   return (<section className={s.section}> 
            <SectionWrapper>
               {title && <h3 className={s.title}>{title}</h3>}

                <div role='radiogoup' className={s.radio_group}>

                    {video_section.map((el) =>  { 

                       return <label className={clsx(s.label, {[s.active]: audience === el?.audience})} key={el?.id}>
                            <   input onClick={handleClick} className={s.input} type="radio" name='audience' value={el?.audience}/>
                                    {el?.title}
                                </label>})}
                </div>

                <YouTubeVideoGallery
                videoListToRender={VideoListToRender?.ids}/>
               
            </SectionWrapper>
        </section>)
};

export default DistanceLearningVideoSection;    