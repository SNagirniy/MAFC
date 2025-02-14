import s from './quick_access_panel.module.scss';
import quickLinks from '@/utils/quickLinks';
import Link from 'next/link';
import { v4 } from 'uuid';

const QuickAccessPanel =()=> {
    return(
        <div className={s.link_container}>
            <ul className={s.link_list}>
                {quickLinks?.map(({title, link})=>{
                    return(
                        <li key={v4()}>
                            <Link 
                            className={s.link}
                            href={link} 
                            target="_blank"  
                            rel="noopener">{title}</Link>
                        </li>
                    )
                })}

            </ul>

        </div>
    )

}

export default QuickAccessPanel;