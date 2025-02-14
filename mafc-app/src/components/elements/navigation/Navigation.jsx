import s from './navigation.module.scss';
import { v4 } from 'uuid';
import Link from 'next/link';


const nav_items =[
   
    {title:'Про коледж',
     link: '/'
    },
    {title: 'Освітній процес',
     link: '/'
    },
    {title: 'Вступникам',
     link: '/entrants'
    },
    {title:'Студентське життя ',
    link: '/'
    },
    {title: 'Документи та звітність',
     link: '/'
    },

]


const Navigation =()=> {
return(
    <nav className={s.nav_box}>
        <ul className={s.list}>
        {nav_items?.map(({title, link})=>{ return (<li key={v4()} className={s.list_item}>
            <Link className={s.link} href={link}>
                <p>{title.toLocaleUpperCase()}</p>
            </Link></li>)})}
        </ul>
    </nav>
)
};

export default Navigation;