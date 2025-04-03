import s from './profesio_description.module.scss';


const ProfesionDescription = ({profesion})=> {
    const {title, code, discipline, educational_program, description, term_of_study, tuition_fees, image} = profesion;

    return(
        <div className={s.profesion_wrapper}> 
                <div className={s.thumb}>
                    <img 
                    className={s.image}
                    src={image} alt={educational_program}
                    width={150}
                    height={100}/>
                </div>
                <div className={s.detail}>
                    <p> Галузь знань
                        <span>{discipline.code} {discipline.definition}</span>
                    </p>
                    <p>Спеціальність
                        
                        <span>{code} {title}</span>
                    </p>
                    <p>ОПП
                        <span>{educational_program}</span>
                    </p>
                    <p>
                        Термін навчання
                        <span>{term_of_study}</span>
                    </p>
                    <p>
                        Мова освітнього процесу
                        <span>Українська</span>
                    </p>
                    <p>
                        Вартість одного року навчання
                        <span>{tuition_fees} грн</span>
                    </p>
                </div>

                <p className={s.description}>
                    {description}
                </p>

                </div>
    )
};

export default ProfesionDescription;