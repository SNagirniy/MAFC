import s from './main_carf.module.scss';
import Image from 'next/image';


const MainCard = ({title, date, description, imageUrl})=> {

    return (
        <article className={s.card}>
        <div className={s.thumb}>
            <Image src={imageUrl} alt='poster' width={170} height={100} className={s.image}/>
        </div>
        <div className={s.description_box}>
            <span className={s.date}>| {date}</span>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
            <button className={s.btn}>Читати далі
            </button>
        </div>
    </article>
    )
}

export default MainCard;