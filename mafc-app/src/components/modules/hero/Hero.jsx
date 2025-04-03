'use client'
import s from './hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/effect-fade';



const Hero = ()=> {

    return( 
        <section className={s.section}>
                <div className={s.overlay}></div>

                <Swiper
                
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay]}
        className={s.swiper}
      >
        <SwiperSlide>
                <img className={s.image} src={'/agro.jpg'} alt='Hero image'/>
        </SwiperSlide>
        <SwiperSlide>
                <img className={s.image} src={'/managers.jpg'} alt='Hero image'/>
        </SwiperSlide>
      </Swiper>
            
                
               
                <div className={s.wrapper}>
                    <h1 className={s.title}>
                    ВСП "Маслівський аграрний фаховий коледж ім.П.Х.Гаркавого БНАУ"
                    </h1>
                    <p>Вік, досвід, славна історія помножені на знання та вміння</p>
                </div>
        </section>
    )
};

export default Hero;