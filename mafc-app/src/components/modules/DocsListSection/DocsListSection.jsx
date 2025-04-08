import s from './docs_list_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import DocumentsList from '@/components/elements/DocumentsList/DocumentsList';
import DocListSceleton from '@/components/elements/docListSceleton/DocListSceleton';

const DocsListSection = ({title, docs_list, isPending, variant})=> {
    return (
        <section className={s.section}>
            <SectionWrapper>
                    <h3 className={s.main_title}>{title}</h3>
                    {isPending? <DocListSceleton/> : <DocumentsList variant={variant} documents_list={docs_list}/>}
                   
              
            </SectionWrapper>
        </section>
    )
}

export default DocsListSection;