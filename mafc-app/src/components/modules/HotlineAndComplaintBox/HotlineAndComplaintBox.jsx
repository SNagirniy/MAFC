import Link from "next/link";
import s from './hotline_and_complaint_box.module.scss';

const HotlineAndComplaintBox =({title, description})=> {

    return <div className={s.wrapper}>
        {title && <h3 className={s.title}>{title}</h3>}
        {description && <p className={s.description}>{description}</p>}
        <Link className={s.button} href={"/about/contacts"}>Зв’язатися з нами</Link>
    </div>
};

export default HotlineAndComplaintBox;