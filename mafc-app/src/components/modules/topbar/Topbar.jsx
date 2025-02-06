import s from './topbar.module.scss';
import socialLinks from '@/utils/social';
import { v4 } from 'uuid';
import Language from '@/components/elements/language/Language';

const Topbar = ()=> {

    return(
        <section className={s.top_bar}> 
            <div className={s.social}>
                <p>Доєднуйтесь до нас</p>
                <ul className={s.social_list}>
                {socialLinks?.map(({icon,url})=> {return (
                <li key={v4()}>
                    <a className={s.link} href={url} target="_blank" >
                    {icon(s.icon)}
                    </a>
                </li>
            )})}
                </ul>
            </div>
            <Language/>
        </section>
    )
};

export default Topbar;