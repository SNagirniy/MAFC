import s from './schedule_changes.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper"

const ScheduleChanges = ({id})=> {

    if(!id) return null;

return <section className={s.section} id='schedule_changes'>
    <SectionWrapper>
        <h3 className={s.main_title}>
            Зміни розкладу
        </h3>
        <iframe
        className={s.frame}
            src={`https://drive.google.com/file/d/${id}/preview`}
            allow="autoplay">
            </iframe>
    </SectionWrapper>
</section>

};

export default ScheduleChanges;