import AccordionComponent from "../modules/Accordion/Accordion";
import ScheduleChanges from "../elements/schedule_changes/ScheduleChanges";


const SchedulesPage = ({schedules_list})=> {

    const sch_changes = schedules_list?.find(el => el.topic === 'зміни');
    const schedules_sist_to_render = schedules_list?.filter(el => el.topic !== 'зміни');


const sch_changes_id = sch_changes?.documents[0].id;
    return <>
    <AccordionComponent data={schedules_sist_to_render} title={'Розклад і графіки'}/>
    <ScheduleChanges id={sch_changes_id}/>
    </>

}

export default SchedulesPage;