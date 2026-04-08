import s from './person_contact_card.module.scss';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';
import Email from '../../../../public/email.svg';
import Phone from '../../../../public/phone.svg';


const PhoneList = ({phoneArr}) =>{

    return (phoneArr?.map((phone) => 
            <a href={`tel:${phone}`}>{phone}</a>))};

const PersonContactCard =({personData, card_title})=> {
   
        const {teacher_info, image}= personData;

        
return(
    <div className={s.card}>
        <div className={s.thumb}>
            <ResponsiveImage 
            className={s.image}
            formats={image?.formats}
            singleImgUrl={image?.url}
            alt={teacher_info?.name || image?.name}
            />
        </div>
        <div className={s.info_box}>
            <p className={s.card_title}>{card_title || ''}</p>
            <p className={s.contacts}>
                {teacher_info?.name && <span>{teacher_info?.name}</span>}
                {teacher_info?.position && <span>{teacher_info?.position}</span>}
                {teacher_info?.phone && <PhoneList phoneArr={teacher_info?.phone}/>}
                {teacher_info?.mail && <a href={`mailto:${teacher_info?.mail}`}>{teacher_info?.mail}</a>}

            </p>

        </div>

    </div>
)

};

export default PersonContactCard;