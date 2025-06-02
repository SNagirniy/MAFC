'use client'

import s from './licenses_and_certificates_section.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import DocumentsList from '@/components/elements/DocumentsList/DocumentsList';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const LicensesAndCertificatesSection = ({docx, images})=> {

 const ReversedArr= images?.toReversed();

    return (
        <section className={s.section}>
        <SectionWrapper>
            <h4 className={s.main_title}>Ліцензії та сертифікати</h4>
            <div className={s.gallery_box}>
            <Swiper
           
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={s.swiper}
            >

                {ReversedArr?.map((item)=> {
                    return( <SwiperSlide key={item?.id}>
                        <div className={s.thumb}>
                        <img className={s.image} src={`/api/about/images_proxy?id=${item.id}`} alt={item?.name} />
                        </div>
                    </SwiperSlide>)
                })}

            </Swiper>
            </div>
            
            <div className={s.doc_list}>
                <DocumentsList documents_list={docx}/>
            </div>

        </SectionWrapper>
        </section>
    )
};

export default LicensesAndCertificatesSection;