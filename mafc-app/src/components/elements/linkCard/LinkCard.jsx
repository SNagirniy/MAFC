import s from './link_card.module.scss';
import ResponsiveImage from '../responsiveImage/ResponsiveImage';


const LinkCard =({cardData})=> {
    const {title, decsription, image, link} = cardData;

    return(
        <a target='_blank' href={link} className={s.card}>
            <div className={s.thumb}>
                <ResponsiveImage 
                singleImgUrl={image?.url}
                formats={image?.formats}
                alt={title}
                className={s.image}/>
            </div>
            <div className={s.text_box}>
                <h4>{title}</h4>
                <p>{decsription}</p>
            </div>

        </a>
    )

};

export default LinkCard;