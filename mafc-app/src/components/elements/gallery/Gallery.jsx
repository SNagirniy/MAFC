'use client'
import s from './gallery.module.scss';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';
import VideoItem from '../videoItem/VideoItem';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = ({imageArr})=> {
    if(!imageArr) return null;
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
                    const imageUrl = item?.url ? item?.url : `/api/about/images_proxy?id=${item.id}`;
                    return( <SwiperSlide key={item?.id}>
                        <div className={s.thumb}>
                            {item?.video_id && <VideoItem item={item}/>}
                           {!item?.video_id && <ResponsiveImage formats={item?.formats} alt={item?.name? item?.name : 'Gallery image'} className={s.image} singleImgUrl={imageUrl}/>}
                        </div>
                    </SwiperSlide>)
                })}

            </Swiper>
            </div>
    )

};


export default Gallery;