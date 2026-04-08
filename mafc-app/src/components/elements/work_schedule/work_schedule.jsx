import s from './work_schedule.module.scss';

const WorkSchedule=({work_shedule_data, title})=>{

    return(
        <div className={s.dash_box}>
                <h4>{title ||'Графік роботи'}</h4>
                <ul className={s.shedule_list}>
                    {work_shedule_data?.map(({id, title, value})=> {
                    return(
                        <li className={s.shedule_item} key={id}>
                            <p>{title}</p>
                            <p>{value}</p>
                        </li>
                    )
                })}
                </ul>
            </div>
    )
}

export default WorkSchedule;