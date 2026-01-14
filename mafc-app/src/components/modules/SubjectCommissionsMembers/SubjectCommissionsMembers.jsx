import s from './subject_commissions_members.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Link from 'next/link';



const SubjectCommissionsMembers = ({subjectCommissionsList})=> {

    return(
        <section>
            <SectionWrapper>
                <h3 className={s.main_title}>циклові комісії</h3>
                <ul className={s.link_list}>
                    {subjectCommissionsList?.map((item)=> {
                        return ( <li key={item?.category?.code} className={s.link_item}>
                            <Link className={s.link} href={`/about/councils_and_commissions/${item?.category?.code}`}>
                            {item?.title}
                            </Link>
                        </li>)
                    })}
                   
                </ul>
            </SectionWrapper>
        </section>
    )
};

export default SubjectCommissionsMembers;