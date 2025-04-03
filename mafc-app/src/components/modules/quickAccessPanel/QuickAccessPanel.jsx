import s from './quick_access_panel.module.scss';
import quickLinks from '@/utils/quickLinks';
import Link from 'next/link';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { v4 } from 'uuid';


const QuickAccessPanel =()=> {
    return(
        
        <div className={s.link_container}>
            <SectionWrapper>
            <ul className={s.link_list}>
                {quickLinks?.map(({title, link,icon})=>{
                    return(
                        <li key={v4()}>
                            <Link 
                            className={s.link}
                            href={link} 
                            target="_blank"  
                            rel="noopener">
                                <div className={s.thumb}>
                                    {icon(s.icon)}
                                </div>
                               <p>{title}</p>
                                </Link>
                        </li>
                    )
                })}

            </ul>
</SectionWrapper>
        </div>
        
    )

}

export default QuickAccessPanel;