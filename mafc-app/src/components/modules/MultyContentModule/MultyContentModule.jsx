import s from './multy_content.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Gallery from '@/components/elements/gallery/Gallery';

const MultyContentModule =({page_title, markdown, media_array})=>{


return (
    <section>
        <SectionWrapper>
        <div className={s.box}>
           {page_title && <h1 className={s.page_title}>{page_title}</h1>}
           {markdown &&
                <div className="ck-content" dangerouslySetInnerHTML={{ __html: markdown }}>

                </div>
            }
            {media_array && <div className={s.gallery_box}><Gallery imageArr={media_array}/></div> }
        </div>
        </SectionWrapper>
    </section>
)

};

export default MultyContentModule;