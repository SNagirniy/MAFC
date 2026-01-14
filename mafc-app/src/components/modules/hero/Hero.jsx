'use client'
import s from './hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay} from 'swiper/modules';
import { useRef, useEffect } from 'react';
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';
import VideoItem from '@/components/elements/videoItem/VideoItem';
import 'swiper/scss';
import 'swiper/css/effect-fade';



const defaultData = [
  {
    id: '1',
    image:{
      url: '/agro.jpg'
    }, 
    title: 'ВСП "Маслівський аграрний фаховий коледж ім.П.Х.Гаркавого Білоцерківського НАУ"',
    subtitle:'Вік, досвід, славна історія помножені на знання та вміння',
  },
];

const Hero = ({hero_data})=> {
  const swiperRef = useRef(null);
  const playersRef = useRef([]);


  const dataToRender = !hero_data || hero_data?.length === 0 ? defaultData : hero_data;

    function handleSlideChange() {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const activeIndex = swiper.activeIndex;
    const activeSlide = dataToRender[activeIndex];


     playersRef.current.forEach((player) => {
    if (player?.pauseVideo) player.pauseVideo();
  });

  if (!activeSlide?.video?.id) {
    swiper.autoplay.start();
  }
  };


  useEffect(() => {
  if (window.YT) return;

  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);

  window.onYouTubeIframeAPIReady = () => {
    const iframes = document.querySelectorAll('[id^="youtube-"]');

    iframes.forEach((iframe, index) => {
      playersRef.current[index] = new window.YT.Player(iframe, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              swiperRef.current?.autoplay.stop();
            }

            if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              swiperRef.current?.autoplay.start();
            }
          }
        }
      });
    });
  };
}, []);





    return( 
        <section className={s.section}>
                

                <Swiper 
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: false, }}
                modules={[EffectFade,Autoplay]}
                onSlideChange={() => handleSlideChange()}
                className={s.swiper}>

                  {dataToRender.map((el)=> {
                    return(
                      
                    
               (el?.video?.id ?(<SwiperSlide className={s.slide} key={el?.id}>
                <div className={s.thumb}>
                <VideoItem item={el?.video} id={el?.id}/>
                </div>
                </SwiperSlide>) 
               
               :(   <SwiperSlide className={s.slide} key={el?.id}>
                  <div className={s.thumb}>
                    <div className={s.overlay}></div>
                    <ResponsiveImage formats={el?.image?.formats} alt={'Hero image'} className={s.image} singleImgUrl={el?.image?.url}/>
                  </div>
                   <div className={s.wrapper}>
                   {el?.title && <h1 className={s.title}>
                    {el?.title}
                    </h1>}
                    {el?.subtitle && <p>{el?.subtitle}</p>}
                    {el?.link && <a className={s.link} href={el?.link?.url} target='_blank'>{el?.link?.title}</a>}
                </div>
                </SwiperSlide>))
                    )
                  })}
       
      </Swiper> 
        </section>
    )
};

export default Hero;