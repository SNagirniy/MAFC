import s from './social.module.scss';
import socialLinks from '@/utils/social';
import { v4 } from 'uuid';
import clsx from 'clsx';



const Social = ({isFooter})=> {


    return(
        <ul className={clsx(s.social_list, {[s.footer_soc]: isFooter})}>
                {socialLinks?.map(({icon,url})=> {return (
                <li key={v4()}>
                    <a className={s.link} href={url} target="_blank" >
                    {icon(clsx(s.icon, {[s.footer_icon] : isFooter}))}
                    </a>
                </li>
            )})}
        </ul>
    )
}

export default Social;