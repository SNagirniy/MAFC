import s from './social.module.scss';
import socialLinks from '@/utils/social';
import { v4 } from 'uuid';
import clsx from 'clsx';



const Social = ({isFooter})=> {

if(isFooter) {return(
      <div >
        <h3 className={s.footer_soc_title}>шукай нас у стрічці</h3>
          <ul className={s.footer_social_list}>
                {socialLinks?.map(({icon,url,alt})=> {return (
                <li key={v4()}>
                    <a aria-label={alt} className={s.link} href={url} target="_blank" >
                    {icon(s.icon)}
                    </a>
                </li>
            )})}
        </ul>
      </div>
    )}


    return(
        <ul className={clsx(s.social_list, {[s.footer_social_list]: isFooter})}>
                {socialLinks?.map(({icon,url, alt})=> {return (
                <li key={v4()}>
                    <a aria-label={alt} className={s.link} href={url} target="_blank" >
                    {icon(s.icon)}
                    </a>
                </li>
            )})}
        </ul>
    )
}

export default Social;