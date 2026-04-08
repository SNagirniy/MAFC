import s from './department_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import AccordionComponent from '../Accordion/Accordion';
import Link from 'next/link';



const DepartmentSection =({page_title, markdown, docList, link_item, accorion_title})=> {

    return(
        <>
             <section>
                <SectionWrapper>
                     <div className={s.box}>
                        {page_title && <h1 className={s.page_title}>{page_title}</h1>}
                     {markdown &&
                    <div className="ck-content" dangerouslySetInnerHTML={{ __html: markdown }}></div>}

                        {link_item && <Link target="_target" className={s.button} href={link_item?.url}><span>{link_item?.title}</span></Link>}

                    </div>

                    
                </SectionWrapper>
            </section>
            <AccordionComponent title={accorion_title} data={docList}/>
        </>
    )

}


export default DepartmentSection;