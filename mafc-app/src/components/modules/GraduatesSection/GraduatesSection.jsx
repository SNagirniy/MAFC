'use client'
import s from './graduates_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const GraduatesSection = ({title = "наші випускники", graduators_list})=> {
  
    return(
        <section className={s.section}> 
            <SectionWrapper>
               {title && <h3 className={s.title}>{title}</h3>}
              
               <div className={s.gallery_box}>
            <Swiper
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
             autoplay={{
                  delay: 3500,
                  disableOnInteraction: false, }}
            className={s.swiper}
            >
                {graduators_list?.map((el)=> {
                    return(
                      <SwiperSlide key={el?.documentId}>
                    <article className={s.article}>
                        <div className={s.thumb}>
                            <ResponsiveImage formats={el?.image?.formats} alt={'Gallery image'} className={s.image} singleImgUrl={el?.image?.url}/>
                        </div>

                        <div className={s.description_box}>
                            <h4 className={s.person_title}>{el?.name}</h4>
                            <p className={s.profession}>Спеціальність: {el?.profession?.educational_program}</p>
                            <p className={s.description}>{el?.description}</p>
                        </div>

                    </article>
                </SwiperSlide>
                )})}
              

            </Swiper>
            </div>
                
            </SectionWrapper>
        </section>
    )
};

export default GraduatesSection;