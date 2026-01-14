import s from './topbar.module.scss';
import Language from '@/components/elements/language/Language';
import Social from '@/components/elements/social/Social';
import FontSizeSwitcher from '@/components/elements/FontSizeSwitcher/FontSizeSwitcher';


const Topbar = ()=> {

    return(
        <section className={s.top_bar}> 
            <div className={s.social}>
                <p>Доєднуйтесь до нас</p>
               <Social/>
            </div>
            <div className={s.switcher_box}>
                <FontSizeSwitcher/>
                <Language/>
            </div>
            
        </section>
    )
};

export default Topbar;