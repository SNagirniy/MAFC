import s from './licenses_and_certificates_section.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Gallery from '@/components/elements/gallery/Gallery';



const LicensesAndCertificatesSection = ({images})=> {


    return (
        <section className={s.section}>
        <SectionWrapper>
            <h3 className={s.main_title}>Ліцензії та сертифікати</h3>
            <Gallery imageArr={images}/>
        </SectionWrapper>
        </section>
    )
};

export default LicensesAndCertificatesSection;