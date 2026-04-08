import Link from "next/link";
import s from './hotline_and_complaint_box.module.scss';

const HotlineAndComplaintBox =({title, description, url})=> {

    const link = url? url : "/about/contacts";
    return <div className={s.wrapper}>
        {title && <h3 className={s.title}>{title}</h3>}
        {description && <p className={s.description}>{description}</p>}
        <Link target={url? '_blank' : '_self'} className={s.button} href={link}>Зв’язатися з нами</Link>
    </div>
};

export default HotlineAndComplaintBox;