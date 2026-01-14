'use client'

import s from './applicants_calendar.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { useState } from 'react';
import clsx from 'clsx';
import Calendar from '@/components/elements/calendar/Calendar';

const DefaultComponent = ()=> {
     return(
        <section className={s.section}>
            <SectionWrapper>
                <h2 className={s.main_title}>Календар абітурієнта</h2>
            </SectionWrapper>
        </section>)
}

const ApplicantsCalendar =({calendarData})=> {

    const [educationLevel, setEducationLevel]=useState(calendarData?.[0]?.type);

   const handleClick = (e)=>{
    const {value} = e.currentTarget;
    setEducationLevel(value)
   }

const calendarDataForrender = calendarData?.find(item => item?.type === educationLevel);

const currentYear = new Date( calendarDataForrender?.publishedAt).getFullYear();



if (calendarData.length === 0) {return <DefaultComponent/>};
    return(
        <section className={s.section}>
            <SectionWrapper>
                <h2 className={s.main_title}>Календар абітурієнта {currentYear}</h2>
                <div role='radiogoup' className={s.radio_group}>

                    {calendarData.map((el) =>  { 

                       return <label className={clsx(s.label, {[s.active]: educationLevel === el?.type})} key={el?.id}>
                            <   input onClick={handleClick} className={s.input} type="radio" name='level' value={el?.type}/>
                                    {el?.title}
                                </label>})}
                </div>
                <Calendar calendarData={calendarDataForrender?.calendar}/>

            </SectionWrapper>
        </section>
    )
};

export default ApplicantsCalendar;