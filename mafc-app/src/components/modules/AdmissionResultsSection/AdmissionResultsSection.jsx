import s from './admission_results_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import DocIcon from '../../../../public/doc_icon.svg';
import { v4 } from 'uuid';

const AdmissionResultsSection = ({resultsList})=> {

    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>Результати вступних випробувань</h3>

                <ul className={s.list}>
            {
               resultsList?.map((el)=> {
                  
                const docx = el?.documents;

                if(docx?.length === 0) return null

                return(
                <li key={v4()} className={s.list_item}>
                    <h4 className={s.year}>{el?.topic} рік</h4>

                    {docx?.map((doc)=> <a key={doc?.id} className={s.link} href={doc?.webViewLink} target="_blank" >
                            <DocIcon className={s.icon}/>
                           <span>{doc?.name}</span></a> )}       
                </li>
            )})
            }

        </ul>
            </SectionWrapper>
        </section>
    )
};

export default AdmissionResultsSection;