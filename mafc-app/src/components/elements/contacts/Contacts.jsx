import s from './contacts.module.scss';
import Email from '../../../../public/email.svg';
import Phone from '../../../../public/phone.svg';
import Location from '../../../../public/location.svg';

const Contacts = ()=> {

    return (
        <div className={s.contacts_box}>
            <h3 className={s.title}>Наші контакти</h3>
            <p className={s.item}>
              <span className={s.thumb}><Location className={s.icon}/></span>
              <span>08850 Київська область, Обухівський район с.Маслівка вул. Незалежності 66</span>
            </p>
            <p className={s.item}>
            <span className={s.thumb}><Phone className={s.icon}/></span>
            <span>0684725678; 0970260657</span>
            </p>
            <p className={s.item}>
            <span className={s.thumb}><Email className={s.icon}/></span>
            <span>example@mail.com</span>
            </p>
        </div>
    )
};

export default Contacts;