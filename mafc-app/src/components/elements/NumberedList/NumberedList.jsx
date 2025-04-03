import s from './numbered_list.module.scss';
import { v4 } from 'uuid';

const NumberedList = ({list_to_render})=> {
    return(
            <ul className={s.list}>
                        {list_to_render.map((el) => {
                          
                            const isLink = el?.src || el?.webViewLink ? <a className={s.link} href={el.src || el.webViewLink} target="_blank" >
                            {el.title || el.name}</a> : <p>{el}</p>
                            
                            return(<li key={v4()} className={s.item}>
                            {isLink}
                        </li>)})}
            </ul>)
};


export default NumberedList;