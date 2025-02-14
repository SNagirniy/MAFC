import s from './topbar.module.scss';
import Language from '@/components/elements/language/Language';
import Social from '@/components/elements/social/Social';

const Topbar = ()=> {

    return(
        <section className={s.top_bar}> 
            <div className={s.social}>
                <p>Доєднуйтесь до нас</p>
               <Social/>
            </div>
            <Language/>
        </section>
    )
};

export default Topbar;