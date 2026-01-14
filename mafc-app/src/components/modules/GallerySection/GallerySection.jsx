import s from './gallery_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Gallery from '@/components/elements/gallery/Gallery';

const GallerySection = ({title, imageArr})=> {
    if(!imageArr) return null;
    return(
        <section className={s.section}> 
            <SectionWrapper>
               {title && <h3 className={s.title}>{title}</h3>}
                <Gallery imageArr={imageArr}/>
            </SectionWrapper>
        </section>
    )
};

export default GallerySection;