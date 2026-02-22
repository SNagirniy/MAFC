import s from './rte_text_box.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';

const RteTextBox = ({markdown, title})=> {
if(!markdown)  return null;

   return(
    <section className={s.section}>
        <SectionWrapper>
           {title && <h3 className={s.title}>{title}</h3>}
            <div className="ck-content" dangerouslySetInnerHTML={{ __html: markdown }}>

            </div>
        </SectionWrapper>
    </section>
)
};

export default RteTextBox;