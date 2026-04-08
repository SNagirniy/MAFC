'use client'
import s from './enrollment_orders_nav_panel.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SectionWrapper from '@/components/layouts/SectionWrapper';

const EnrollmentOrdersNavPanel =({enrolmentOrdersList, rootPath, title})=> {

   const pathname = usePathname();
   const columnsNumber = enrolmentOrdersList?.length;

    return(
        <section className={s.section}>
            <h1 className={s.main_title}>{title || 'НАКАЗИ ПРО ЗАРАХУВАННЯ'}</h1>
            <SectionWrapper>
    <nav aria-label="НАКАЗИ ПРО ЗАРАХУВАННЯ">
        <ul className={s.radio_group} style={{ "--colNumber": columnsNumber }}>
                    {enrolmentOrdersList?.map((el) =>  { 
                        const {title, slug} = el;
                        const href = `${rootPath}/${slug}`;
                        const isActive = pathname === href;
                       return <li key={slug}>
                                    <Link
                                    className={clsx(s.label, {[s.active]: isActive})}
                                     href={`${rootPath}/${slug}`}
                                     aria-label={title}>
                                        <span className={s.desctiption}>
                                            {title}
                                         </span>
                                        </Link>
                                </li>})}
        </ul>
    </nav>
    </SectionWrapper>
    </section>
    )
}


export default EnrollmentOrdersNavPanel;