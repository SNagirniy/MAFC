import s from './profesion_card.module.scss';
import clsx from 'clsx';
import Link from 'next/link';


const ProfesionCard = ({title, code, discipline, educational_program, description, image, isRightAlihgn,slug})=> {

    return(
        <div className={clsx(s.grid, {[s.right_alighn]: isRightAlihgn})}>
            <div className={s.thumb}>
                <img className={s.image} src={image} alt={title}/>
            </div>
            <div className={s.definition}>
                <h3 className={s.title}> ОПП "{educational_program}"</h3>
                <p>Галузь знань:<span>{discipline.code}</span><span>"{discipline.definition}"</span></p>
                <p>Спеціальність:<span>{code}</span><span>"{title}"</span></p>
                <p className={s.description}>{description}</p>

                <Link aria-label={`ОПП "${educational_program}"`} href={`entrants/areas_of_educational_activity/${slug}`} className={s.btn}>Дізнатися більше</Link>
            </div>
        </div>
    )
};

export default ProfesionCard;