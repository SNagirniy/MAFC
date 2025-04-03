import s from './calendar.module.scss';
import { v4 } from 'uuid';
import Arrow from '../../../../public/arrow.svg';


const Calendar =({calendarData})=> {
    return(
                <div className={s.calendar_wrapper}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <p>Основний набір</p>
                            <p>Додатковий набір</p>
                        </li>

                        {calendarData?.map(({stage, main_set_date, additional_set_date}) => {return (
                            <li key={v4()}  className={s.item}>
                                <p className={s.item_content}>
                                    <Arrow className={s.arrow}/>
                                    <span className={s.main_event}>{stage}</span>
                                    <span>{main_set_date}</span>
                                </p>
                                 <p className={s.item_content}>
                                    <Arrow className={s.arrow}/>
                                    <span className={s.additional_event}>{stage}</span>
                                    <span>{additional_set_date}</span>
                                </p>
                            </li>)})}
                    </ul>
                </div>
    )
};


export default Calendar;