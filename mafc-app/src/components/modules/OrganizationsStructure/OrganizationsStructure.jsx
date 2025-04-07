import s from './organizations_structure.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';

const OrganizationsStructure = ({structure_image})=> {

    const ImageData = structure_image[0];
    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>Організаційна структура</h3>
                <div className={s.thumb}>
                    <img className={s.image} src={`/api/about/images_proxy?id=${ImageData.id}`} alt="structure" loading='lazy'/>
                </div>
            </SectionWrapper>
        </section>
    )
};


export default OrganizationsStructure;