import s from './subject_commissions_members.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Link from 'next/link';
import AccordionComponent from '../Accordion/Accordion';



const SubjectCommissionsMembers = ({subjectCommissionsList, page_title, description, docxList})=> {

    return(
        <>
        <section className={s.section}>
            <SectionWrapper>
                <h1 className={s.main_title}>{page_title || "циклові комісії"}</h1>
               {description && <div className={s.description}>
                <div className="ck-content" dangerouslySetInnerHTML={{ __html: description }}></div></div>}
                <ul className={s.link_list}>
                    {subjectCommissionsList?.map((item)=> {
                        return ( <li key={item?.category?.code} className={s.link_item}>
                            <Link className={s.link} href={`/subject_comissions/${item?.category?.code}`}>
                            {item?.title}
                            </Link>
                        </li>)
                    })}
                   
                </ul>
            </SectionWrapper>
        </section>
        <AccordionComponent data={docxList}/>
        </>
    )
};

export default SubjectCommissionsMembers;