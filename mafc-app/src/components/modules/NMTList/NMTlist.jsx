import s from './nmt_list.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import clsx from 'clsx';

const NMTLIst = ({title, linkList, icon})=> {


    return <section>
            <SectionWrapper>
                <h3 className={s.title}>{title}</h3>

                <ul className={clsx(s.list, {[s.secondary] : !icon})}>
                    {linkList?.map((el)=> {
                        return(<li key={el?.id} >
                            
                            <a className={clsx(s.link, {[s.secondary] : !icon})} href={el?.url} target="_blank">
                                {icon && <img className={s.logo} src="/UZOYO.png" alt="logo"/>}
                                <span>{el?.title}</span>
                                </a>
                        </li>)
                    })}

                </ul>
            </SectionWrapper>
    </section>
};

export default NMTLIst;