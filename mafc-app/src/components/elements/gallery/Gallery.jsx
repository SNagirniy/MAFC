'use client'
import s from './gallery.module.scss';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = ({imageArr})=> {

    return (
          <div className={s.gallery_box}>
            <Swiper
           
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={s.swiper}
            >

                {imageArr?.map((item)=> {
                    return( <SwiperSlide key={item?.id}>
                        <div className={s.thumb}>
                        <img className={s.image} src={`/api/about/images_proxy?id=${item.id}`} alt={item?.name} />
                        </div>
                    </SwiperSlide>)
                })}

            </Swiper>
            </div>
    )

};


export default Gallery;