import s from './companies_card_list.module.scss';
import Link from 'next/link';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';

const CompaniesCardList = ({pageData})=> {


    return(
        <section>
            <SectionWrapper>
                <div className={s.title_box}>
                <h3>{pageData?.page_title}</h3>
                <p>{pageData?.subtitle}</p>
                </div>
               
                <ul className={s.list}>
                    {pageData?.companies?.map((c)=>{
                        const {title, logo, documentId}= c;
                       
                        return(
                            <li key={documentId} className={s.list_item}>
                                <Link href={`/student_life/career/${documentId}`} className={s.link}>
                                <div className={s.thumb}>
                                    <ResponsiveImage
                                    formats={logo?.formats}
                                    alt={title}
                                    singleImgUrl={logo?.url}
                                    className={s.logo}
                                    />
                                </div>
                                <h4 className={s.company_title}>{title}</h4>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </SectionWrapper>
        </section>
    )
};

export default CompaniesCardList;
