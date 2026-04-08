import s from './social.module.scss';
import socialLinks from '@/utils/social';
import { v4 } from 'uuid';
import clsx from 'clsx';
import Instagram from '../../../../public/instagram.svg'
import Facebook from '../../../../public/facebook.svg';
import Tiktok from '../../../../public/tiktok.svg';
import Youtube from '../../../../public/youtube.svg';


const socialIcon ={
    facebook: <Facebook className={s.icon}/>,
    instagram: <Instagram className={s.icon}/>,
    tiktok: <Tiktok className={s.icon}/>,
    youtube: <Youtube className={s.icon}/>
}


const Social = ({social,isFooter})=> {
const socialLinksToRender = (!social || social?.length === 0) ? socialLinks : social;

if(isFooter) {return(
      <div >
        <h3 className={s.footer_soc_title}>шукай нас у стрічці</h3>
          <ul className={s.footer_social_list}>
                {socialLinksToRender?.map(({social})=> {return (
                <li key={v4()}>
                    <a aria-label={social?.type} className={s.link} href={social?.link} target="_blank" >
                    {socialIcon[social?.type]}
                    </a>
                </li>
            )})}
        </ul>
      </div>
    )}


    return(
        <ul className={clsx(s.social_list, {[s.footer_social_list]: isFooter})}>
                {socialLinksToRender?.map(({social})=> {return (
                <li key={v4()}>
                    <a aria-label={social?.type} className={s.link} href={social?.link} target="_blank" >
                    {socialIcon[social?.type]}
                    </a>
                </li>
            )})}
        </ul>
    )
}

export default Social;