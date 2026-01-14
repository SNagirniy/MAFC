import s from './docs_list_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import DocumentsList from '@/components/elements/DocumentsList/DocumentsList';
import DocListSceleton from '@/components/elements/docListSceleton/DocListSceleton';

const DocsListSection = ({title, docs_list, isPending, variant, folderId})=> {
    if(!docs_list || docs_list?.length === 0 || docs_list.error) {return null};
    
    return (
        <section className={s.section} key={folderId}>
            <SectionWrapper>
                    <h3 className={s.main_title}>{title}</h3>
                    {isPending? <DocListSceleton/> : <DocumentsList variant={variant} documents_list={docs_list}/>}
                   
              
            </SectionWrapper>
        </section>
    )
}

export default DocsListSection;