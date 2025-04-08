
import s from './documents_list.module.scss';
import DocIcon from '../../../../public/doc_icon.svg';
import { v4 } from 'uuid';
import clsx from 'clsx';


const DocumentsList = ({documents_list, variant='singe'}) => {
    return (
        <ul className={clsx(s.list, {[s.double] : variant === 'double'}) }>
        {documents_list?.map(({id,name, webViewLink})=>{
            return (
                <li key={id || v4()} className={s.item}>
                  <DocIcon className={s.icon}/>
                  <a className={s.link} href={webViewLink} target="_blank">{name}</a>
                </li>)
        })}
    </ul>
    )
}

export default DocumentsList;