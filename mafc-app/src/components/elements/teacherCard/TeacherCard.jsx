import s from './teacher_card.module.scss';
import Email from '../../../../public/email.svg';
import Phone from '../../../../public/phone.svg';
import { v4 } from 'uuid';


const colors=['#f4c072','#51b282','#db6c62','#5d577d','#8a8a92', '#ff7f46','#00a0c1','#16697a','#c0eb34','#347aeb','#a243b5','#b54393','#bf2424']
const randomColor = ()=>{ const index = Math.floor(Math.random() * colors.length); return colors[index]};

const PhoneArr = ({phoneList})=>{
   return  phoneList?.map(item => <a key={item} href={`tel:${item}`}> <Phone className={s.icon}/> {item}</a>)};


const TeacherCard = ({name, viewImageSrc, position, mail, phone, consultation})=> {

const teacherPhoto = viewImageSrc? viewImageSrc : '/default_teacher.png';


    return(
        <div className={s.card}>
        
                    <div className={s.thumb} style={{background: `linear-gradient(to top, ${randomColor()} 70%,     transparent         70%)`}}>
                        <img className={s.image} src={teacherPhoto} alt="teacher" />
                    </div>
                    <div className={s.article}>
                        <h4 className={s.name}>{name?.toLowerCase()}</h4>
                        <p>{position}</p>
                 
                 {consultation?.length > 0 && <div className={s.consultation}>
                   
                   <h5>Графік консультацій</h5>
                   <ul className={s.consultation_list}>
                       {consultation?.map((el)=> {
                          return (
                           <li key={v4()}>
                               <p className={s.consultation_item}>
                                   <span>{el?.discipline} :</span>
                                   <span>{el?.day}</span>
                                   <span>{el?.time}</span>
                                   <span>{`аудиторія: ${el?.classroom}`}</span>
                               </p>
                           </li>
                          )
                       })}
                   </ul>
               </div>}
                
                        <p className={s.contacts}>
                        {phone && <PhoneArr phoneList={phone}/>}
                        {mail && <a href={`mailto:${mail}`}><Email className={s.icon}/> {mail}</a>}
                     </p>
                    </div>
        </div>
       
    )
};

export default TeacherCard;
