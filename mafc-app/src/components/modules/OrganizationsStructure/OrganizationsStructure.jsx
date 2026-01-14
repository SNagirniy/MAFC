import s from './organizations_structure.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';

const OrganizationsStructure = ({structure_image_obj})=> {

    const {formats, name, url, } = structure_image_obj
    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>Організаційна структура</h3>
                <div className={s.thumb}>
                    <ResponsiveImage 
                    formats={formats}
                    singleImgUrl={url}
                    alt={name}
                    className={s.image}/>
                </div>
            </SectionWrapper>
        </section>
    )
};


export default OrganizationsStructure;