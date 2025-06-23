

import s from './licenses_and_certificates_section.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import DocumentsList from '@/components/elements/DocumentsList/DocumentsList';
import Gallery from '@/components/elements/gallery/Gallery';



const LicensesAndCertificatesSection = ({docx, images})=> {

 const ReversedArr= images?.toReversed();

    return (
        <section className={s.section}>
        <SectionWrapper>
            <h4 className={s.main_title}>Ліцензії та сертифікати</h4>
            <Gallery imageArr={ReversedArr}/>
            <div className={s.doc_list}>
                <DocumentsList documents_list={docx}/>
            </div>

        </SectionWrapper>
        </section>
    )
};

export default LicensesAndCertificatesSection;