import s from './hero.module.scss';
import Image from 'next/image';
import QuickAccessPanel from '../quickAccessPanel/QuickAccessPanel';

const Hero = ()=> {

    return( 
        <section className={s.section}>
                <div className={s.overlay}></div>
                <div className={s.thumb}>
                <Image className={s.hero_img} src={'/hero.jpg'} alt='Hero image' width={100} height={100}/>
                </div>
                <div className={s.wrapper}>
                    <h1 className={s.title}>
                    ВСП "Маслівський аграрний фаховий коледж ім.П.Х.Гаркавого БНАУ"
                    </h1>
                    <p>Вік, досвід, славна історія помножені на знання та вміння</p>
                </div>

                <QuickAccessPanel/>
        </section>
    )
};

export default Hero;