import s from './contacts.module.scss';
import Email from '../../../../public/email.svg';
import Phone from '../../../../public/phone.svg';
import Location from '../../../../public/location.svg';
import clsx from 'clsx';
import { v4 } from 'uuid';

const PhoneList = ({phoneArr}) =>{

    return (phoneArr?.map((phone) => 
            <a href={`tel:${phone}`}>{phone}</a>))};

const Contacts = ({contact})=> {

    return (
        <div className={s.contacts_box}>
            <h3 className={s.title}>Наші контакти</h3>
            <ul className={s.contact_persons}>
                            {contact?.map((item)=> {

                                const {name, position, phone, mail, adress}= item;
                                return (
                                    <li key={v4()}>
                                        <p className={s.position}>
                                        <span>{position}</span>
                                        {adress&& <span>{adress}</span>}
                                        {name && <span>{name}</span>}
                                        {phone && <PhoneList phoneArr={phone}/>}
                                        {mail && <a href={`mailto:${mail}`}>{mail}</a>}
                                        </p>
                                    </li>
                                )
                            })}
                            
                        </ul>
        </div>
    )
};

export default Contacts;