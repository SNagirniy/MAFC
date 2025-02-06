import s from './navigation.module.scss';
import { v4 } from 'uuid';


const nav_items =[
    {title:'Головна'},
    {title:'Про коледж'},
    {title: 'Освітній процес'},
    {title: 'Вступникам'},
    {title:'Студентське життя '},
    {title: 'Документи та звітність'},

]


const Navigation =()=> {
return(
    <nav className={s.nav_box}>
        <ul className={s.list}>
        {nav_items?.map(({title})=>{ return (<li key={v4()} className={s.list_item}><p>{title}</p></li>)})}
        </ul>
    </nav>
)
};

export default Navigation;