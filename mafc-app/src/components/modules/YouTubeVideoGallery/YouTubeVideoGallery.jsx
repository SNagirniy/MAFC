'use client';
import s from './you_tube_video_gallery.module.scss';
import { useState } from "react";
import { Swiper,SwiperSlide} from 'swiper/react';
import { Thumbs,FreeMode,Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

const YouTubeVideoGallery = ({videoListToRender})=> {
const [thumbsSwiper, setThumbsSwiper]= useState(null);

return (
      <div className={s.gallery_box}>
            <Swiper
     
        loop={true}
        spaceBetween={10}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard]}
        className={s.swiper}
    
      >

         {videoListToRender?.map((item)=> {
                    return( <SwiperSlide
                    key={item?.id}>
                        <div className={s.thumb}>
                        <iframe
            className={s.current_video}
            src={`https://www.youtube.com/embed/${item?.video_id}`}
            title={item?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin" 
          />
                        </div>
                    </SwiperSlide>)
                })}

             </Swiper>
              <Swiper
        onSwiper={setThumbsSwiper}
       
        loop={true}
        spaceBetween={10}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        watchSlidesProgress={true}
        modules={[Thumbs,Mousewheel, Keyboard]}
        className={s.thumb_swiper}
        breakpoints={{
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
    },
  }}
      >
        {videoListToRender?.map((item, i)=> {
           
                    return( <SwiperSlide key={item?.id}>
                       
                     <div className={s.swiper_slide}>
                        <h5 className={s.thumb_title}>{i + 1}. {item?.title}</h5>
                       <img
                        src={`https://img.youtube.com/vi/${item?.video_id}/hqdefault.jpg`}
                        alt={item?.title}
                        className="rounded w-full"/>
                     </div>
                    </SwiperSlide>)
                })}

            </Swiper>
                </div>
)

}

export default YouTubeVideoGallery;