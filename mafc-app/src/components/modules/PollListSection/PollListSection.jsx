import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './poll_list_section.module.scss';
import PollIcon from '../../../../public/poll_icon.svg';
import { v4 } from 'uuid';
import clsx from 'clsx';




const PollListSection =({title,pollList})=> {
  
    if(!pollList || pollList?.length === 0) return null;

    return (
        <section className={s.section}>
            <SectionWrapper>
            <h3 className={s.main_title}>{title}</h3>
            <div className={s.list_wrapper}>
                <ul className={s.list}>
                {pollList?.map((item)=>{
            return (
                <li key={v4()} className={clsx(s.item, {[s.result] : item?.type === 'result'})}>
                    <PollIcon className={clsx(s.icon, {[s.result] : item?.type === 'result'})}/>
                    <a className={s.link} href={item?.url} target="_blank" >{item?.title}</a>
                </li>)
        })}

                </ul>
            </div>

            </SectionWrapper>
        </section>
    )
};


export default PollListSection;