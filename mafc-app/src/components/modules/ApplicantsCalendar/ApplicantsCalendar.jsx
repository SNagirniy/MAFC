'use client'

import s from './applicants_calendar.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { useState } from 'react';
import clsx from 'clsx';
import Calendar from '@/components/elements/calendar/Calendar';



const educational_base={
    base: {
        title: 'Для вступників на основі базової загальної середньої освіти за денною формою здобуття освіти',
        calendar: [
            {stage: 'Реєстрація електронних кабінетів вступників',
                main_set_date:'З 25 червня по 13 липня ',
                additional_set_date:'З 02 серпня по 22 вересня'
            },
            {stage: 'початок прийому заяв та документів',
                main_set_date:'01 липня',
                additional_set_date:'02 серпня'
            },
            {stage: 'Закінчення прийому заяв тадокументів',
                main_set_date:'13 липня о 18:00',
                additional_set_date:'22 вересня о 18:00'
            },
            {stage: 'Оприлюднення рейтингового списку вступників',
                main_set_date:'Не пізніше 12:00 год 24 липня ',
                additional_set_date:'Не пізніше 12:00 год 24 вересня'
            },
            {stage: 'Виконання вимог до зарахування на місця державного замовлення',
                main_set_date:'Не пізніше 19:00 год 27 липня',
                additional_set_date:''
            },
            {stage: 'Зарахування за державним замовленням',
                main_set_date:'Не пізніше 21:00 год 31 липня',
                additional_set_date:''
            },
            {stage: 'Зарахування за державним замовленням',
                main_set_date:'Не пізніше 03 серпня',
                additional_set_date:'Не пізніше 26 вересня'
            }
        ]

    },
    full: {
        title: 'Для вступників на основі повної загальної середньої освіти, освітньо-кваліфікаційного рівня кваліфікованого робітника за денною формою здобуття освіти',
        calendar: [
            {stage: 'Реєстрація електронних кабінетів вступників',
                main_set_date:'З 01 липня по 30 серпня',
                additional_set_date:'З 31 серпня по 22 вересня'
            },
            {stage: 'початок прийому заяв та документів',
                main_set_date:'05 липня',
                additional_set_date:'01 вересня'
            },
            {stage: 'Закінчення прийому заяв та документів від осіб, які вступають на основі індивідуальної співбесіди',
                main_set_date:'О 18:00 год 22 липня ',
                additional_set_date:''
            }
        ]  
    }}

const ApplicantsCalendar =()=> {

    const [educationLevel, setEducationLevel]=useState(Object.keys(educational_base)[0]);

   const handleClick = (e)=>{
    const {value} = e.currentTarget;
    setEducationLevel(value)
   }

const calendarDataForrender = educational_base[educationLevel]?.calendar;

    return(
        <section className={s.section}>
            <SectionWrapper>
                <h2 className={s.main_title}>Календар абітурієнта 2025</h2>
                <div role='radiogoup' className={s.radio_group}>

                    {Object.keys(educational_base).map((key) =>  { 


                       return <label className={clsx(s.label, {[s.active]: educationLevel === key})} key={key}>
                            <   input onClick={handleClick} className={s.input} type="radio" name='level' value={key}/>
                                    {educational_base[key].title}
                                </label>})}
                </div>
                <Calendar calendarData={calendarDataForrender}/>

                

            </SectionWrapper>
        </section>
    )
};

export default ApplicantsCalendar;