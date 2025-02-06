import En from '../../../../public/en.svg';
import Uk from '../../../../public/uk.svg';
import s from './language.module.scss';


const Language = ()=> {
    return(
        <div className={s.lang_container}>
            <button className={s.btn}><Uk className={s.icon}/></button>
        </div>
    )
};

export default Language;