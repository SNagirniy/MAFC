'use client'
import s from './profesions_radio_panel.module.scss';
import clsx from 'clsx';
import professions_icons from '@/utils/professions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SectionWrapper from '@/components/layouts/SectionWrapper';

const ProfesionsNavPanel =({professions, rootPath})=> {

   const pathname = usePathname();

    return(
        <section className={s.section}>
            <h1 className={s.main_title}>Напрямки освітньої діяльності</h1>
            <SectionWrapper>
    <nav aria-label="Навігація освітніми програмами">
        <ul className={s.radio_group}>
                    {professions?.map((el) =>  { 
                        const {educational_program, slug} = el;
                        const href = `${rootPath}/${slug}`;
                        const isActive = pathname === href;
                       return <li key={slug}>
                                    <Link
                                    className={clsx(s.label, {[s.active]: isActive})}
                                     href={`${rootPath}/${slug}`}
                                     aria-label={educational_program}>
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


export default ProfesionsNavPanel;