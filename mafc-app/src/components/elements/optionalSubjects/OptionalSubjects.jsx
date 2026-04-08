
import s from  './optional_subjects.module.scss';
import professions_icons from '@/utils/professions';
import Link from 'next/link';
import SectionWrapper from '@/components/layouts/SectionWrapper';

const OptionalSubjects =({professions, rootPath, title})=> {


    return(
        <section className={s.section}>
            <h1 className={s.main_title}>{title || 'Напрямки освітньої діяльності'}</h1>
            <SectionWrapper>
    <nav aria-label={title || "Навігація освітніми програмами"}>
        <ul className={s.radio_group}>
                    {professions?.map((el) =>  { 
                        const {educational_program, slug} = el;
                        const href = `${rootPath}/${slug}#poll`;
                       return <li key={slug}>
                                    <Link
                                    className={s.label}
                                     href={href}
                                     aria-label={`${educational_program} poll`}>
                                     { professions_icons?.[el?.slug]}
                                        <span className={s.desctiption}>
                                            {educational_program}
                                         </span>
                                        </Link>
                                </li>})}
        </ul>
    </nav>
    </SectionWrapper>
    </section>
    )
}


export default OptionalSubjects;