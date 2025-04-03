import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './poll_list_section.module.scss';
import DocIcon from '../../../../public/doc_icon.svg';
import PollIcon from '../../../../public/poll_icon.svg';
import { v4 } from 'uuid';




const PollListSection =({title,pollList})=> {
  
    if(!pollList) return null;

    return (
        <section className={s.section}>
            <SectionWrapper>
            <h3 className={s.main_title}>{title}</h3>
            <div className={s.list_wrapper}>
                <ul className={s.list}>
                {pollList?.map(({poll,result})=>{
            return (
                <li key={v4()} className={s.list_item}>
                    <div className={s.item}>
                    <PollIcon className={s.icon}/>
                    <a className={s.link} href={poll.src} target="_blank" >{poll.title}</a>
                    </div>
                    <div className={s.item}>
                    <DocIcon className={s.icon}/>
                    <a className={s.link} href={result.src} target="_blank" >{result.title}</a>
                    </div>
                  
                </li>)
        })}

                </ul>
            </div>

            </SectionWrapper>
        </section>
    )
};


export default PollListSection;