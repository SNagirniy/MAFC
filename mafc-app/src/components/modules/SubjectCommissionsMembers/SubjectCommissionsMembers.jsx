import s from './subject_commissions_members.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Link from 'next/link';
import comissionsSlugObject from '@/utils/comission_slug_object';



const SubjectCommissionsMembers = ()=> {

    const comissionsSlugs = Object.keys(comissionsSlugObject);

    return(
        <section>
            <SectionWrapper>
                <h3 className={s.main_title}>циклові комісії</h3>
                <ul className={s.link_list}>
                    {comissionsSlugs?.map((slug)=> {
                        return ( <li key={slug} className={s.link_item}>
                            <Link className={s.link} href={`/about/subject_commissions/${slug}`}>
                            {comissionsSlugObject[slug]}
                            </Link>
                        </li>)
                    })}
                   
                </ul>
            </SectionWrapper>
        </section>
    )
};

export default SubjectCommissionsMembers;