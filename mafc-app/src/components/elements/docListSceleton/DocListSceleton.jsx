import s from './doc_list_sceleton.module.scss';
import DocIcon from '../../../../public/doc_icon_sceleton.svg';
import { v4 } from 'uuid';



const DocListSceleton = ()=>{

    return(
        <ul className={s.list}>
            {[1,2,3,4].map(()=> <li key={v4()} className={s.item}>
                <DocIcon className={s.icon}/>
                <span></span>
            </li>)}
           
           
        </ul>
    )

};

export default DocListSceleton;