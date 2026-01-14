import AccordionComponent from "../modules/Accordion/Accordion";
import ScheduleChanges from "../elements/schedule_changes/ScheduleChanges";
import EmptyState from "../modules/EmptyState/EmptyState";


const SchedulesPage = ({schedules_list})=> {
    if(!schedules_list || schedules_list?.length === 0) return <EmptyState/>;

    const sch_changes = schedules_list?.find(el => el.topic?.toLowerCase() === 'зміни');
    const schedules_sist_to_render = schedules_list?.filter(el => el.topic?.toLowerCase() !== 'зміни');


const sch_changes_id = sch_changes?.documents[0].id;
    return <>
    <AccordionComponent data={schedules_sist_to_render} title={'Розклад і графіки'}/>
    <ScheduleChanges id={sch_changes_id}/>
    </>

}

export default SchedulesPage;