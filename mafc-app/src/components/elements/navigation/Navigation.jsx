'use client'
import s from './navigation.module.scss';
import { v4 } from 'uuid';
import Link from 'next/link';



const nav_items =[
   
    {title:'Про коледж',
    menu: [
            {item: 'регламентуючі документи',
            link: '/about/regulatory_documents',},
            {item: 'структура та управління',
            link: '/about/structure_and_management',},
            {item: 'циклові (предметні) комісії',
            link: '/',},
            {item: 'наші партнери',
                link: '/',},
            {item: 'контактна інформація',
                link: '/',},
            
         ]
    },
    {title: 'Освітній процес',
     menu: [
            {item: 'освітньо-професійні програми',
            link: '/educational_process/educational_programs?profession=crop_production',
            },
            {item: 'матеріально-технічна база',
                link: '/',},
            {item: 'моніторинг якості освіти',
                link: '/',},

            {item: 'практичне навчання',
                link: '/',},

            {item: 'дистанційне навчання',
                link: '/',},
            
         ]
    },
    {title: 'Вступникам',
     menu: [
        {item: 'Документи',
            link: '/entrants/documents',},
        {item: 'Вступний гід',
        link: '/entrants/areas_of_educational_activity?profession=crop_production',
        },
        {item: 'рейтинг за спеціальностями',
            link: '/entrants/specialty_rating?profession=crop_production',},
        {item: 'календар абітурієнта',
            link: '/entrants/calendar',},
            {item: 'Результати вступних випробувань',
                link: '/entrants/admission_results',},
            {item: 'Накази про зарахування',
                link: '/entrants/enrollment_orders?basic_education=9',},
     ]
    },
    {title:'Студентське життя ',
    menu: [
            {item: 'Напрямки освітньої діяльності',
            link: '/',
            },
            {item: 'Накази про зарахування',
            link: '/',
                }
         ]
    },
    {title: 'Документи та звітність',
    menu: [
            {item: 'Звіт про діяльність керівника закладу освіти',
            link: '/documents_and_reporting/director_report',
            },
            {item: 'Звітність закладу освіти',
            link: '/documents_and_reporting/college_reporting',
                },
            {item: 'публічні закупівлі',
                link: '/documents_and_reporting/public_procurement',},
            {item: 'благодійна допомога',
                link: '/documents_and_reporting/charitable_assistance',}
         ]
    },

];


const Navigation =()=> {
return(
    <nav className={s.nav_box}>
        <ul className={s.list}>
        {nav_items?.map(({title, menu})=>{ return (
            <li key={v4()} className={s.list_item}>
            <a className={s.triger}>{title}</a>
            <ul className={s.dropdown}>
                {menu?.map((item)=> <li key={item.item}><Link className={s.link} href={item.link}>{item.item}</Link></li>)}
            </ul>
            </li>)})}
        </ul>
    </nav>
)
};




export default Navigation;