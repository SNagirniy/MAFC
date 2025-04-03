import s from './teacher_card.module.scss';
import Email from '../../../../public/email.svg';
import Phone from '../../../../public/phone.svg';
import { v4 } from 'uuid';


const colors=['#f4c072','#51b282','#db6c62','#5d577d','#8a8a92', '#ff7f46','#00a0c1','#16697a','#c0eb34','#347aeb','#a243b5','#b54393','#bf2424']
const randomColor = ()=>{ const index = Math.floor(Math.random() * colors.length); return colors[index]};



const TeacherCard = ({name, viewImageSrc, position, mail, phone, consultation})=> {
    return(
        <div className={s.card}>
        
                    <div className={s.thumb} style={{background: `linear-gradient(to top, ${randomColor()} 70%,     transparent         70%)`}}>
                        <img className={s.image} src={viewImageSrc} alt="teacher" />
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
                        {phone && <span><Phone className={s.icon}/> {phone}</span>}
                        {mail && <span><Email className={s.icon}/> {mail}</span>}
                     </p>
                    </div>
        </div>
       
    )
};

export default TeacherCard;



const Example = [{
    id:1,
    name: 'колІсник Олеся іваніВна',
    viewImageSrc: '/Kolisnyk.png',
    position: 'Заступник директора з навчальної роботи, спеціаліст вищої категорії, викладач-методист',
    mail: 'olessiakolpal@gmail.com',
    phone: '0(4574)-3-33-34',
    consultation: [
        {discipline: 'Організація і планування діяльності підприємства',
            day: 'Понеділок',
            time:'15:00 - 16:00',
            classroom: 25
        },
        {discipline: 'Економіка підприємства',
            day: 'віторок',
            time:'15:00 - 16:00',
            classroom: 25
        }
    ]     
},
{
    id:2,
    name: 'Почтар Наталія Іванівна',
    viewImageSrc: '/Poshtar.png',
    position: 'Заступник директора з виховної роботи, спеціаліст вищої категорії, викладач-методист',
    mail: 'Pochtarnatali@gmail.com',
    phone: '',
  
    consultation: [
        {discipline: 'Зарубіжна література ',
            day: 'середа',
            time:'15:30 - 16:30',
            classroom: 6
        }
    ]     
},]