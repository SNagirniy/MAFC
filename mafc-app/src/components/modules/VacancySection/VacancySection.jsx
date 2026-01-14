import s from './vacancy_section.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';



const DefaultMessage =()=>{
    {return (
    <section>
        <SectionWrapper>
            <div className={s.center_box}>
                <p>Сьогодні без вакансій, але двері коледжу завжди відчинені для ідейних людей</p>
            </div>
        </SectionWrapper>
    </section>
)}
}

const PhoneList = ({phoneArr}) =>{


    return (phoneArr?.map((phone) => 
            <a href={`tel:${phone}`}>{phone}</a>))};

const VacancySection = ({page_title, companies})=> {


if(!companies) {return <DefaultMessage/>}

    return(
        <section>
            <SectionWrapper>
                <h3 className={s.main_title}>{page_title}</h3>
                <ul className={s.list}>
                    {companies?.map((c)=> {
                    const {documentId, title, description, updatedAt, logo, links,contacts, vacancy}= c;

                    return (
                        <li key={documentId} className={s.list_item}>
                            <div className={s.company_title_box}>
                                <div className={s.thumb}>
                                  {logo &&  <ResponsiveImage
                                    formats={logo?.formats}
                                    alt={title}
                                    singleImgUrl={logo?.url}
                                    className={s.logo}
                                    />}
                                </div>
                                <h4>{title}</h4>
                                <span>{new Date(updatedAt).toLocaleDateString('uk-UA')}</span>
                                <div className="ck-content" dangerouslySetInnerHTML={{ __html: description }}></div>
                            </div>
                            <div className={s.vacancy_box}>
                                <h4 className={s.block_title}>Приєднуйся до нашої команди</h4>
                                <ul className={s.vacancy_list}>
                                    {
                                        vacancy?.map((v)=>{
                                            return(
                                                <li className={s.vacancy_item} key={v?.id}>
                                                    <h5>{v?.title}</h5>
                                                    <span>{v?.salary? `${v?.salary} грн.` : null}</span>
                                                     <div className="ck-content" dangerouslySetInnerHTML={{ __html: v?.description }}></div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                            <div className={s.contacts_dox}>
                                <h4 className={s.block_title}>Як з нами зв’язатися</h4>
                                <ul className={s.contact_list}>
                            {contacts?.map((item)=> {

                                const {name, position, phone, mail, adress}= item;
                                return (
                                    <li key={item?.id}>
                                        <p className={s.position}>
                                        <span>{position}</span>
                                        {adress&& <span>{adress}</span>}
                                        {name && <span>{name}</span>}
                                        {phone && <PhoneList phoneArr={phone}/>}
                                        {mail && <a href={`mailto:${mail}`}>{mail}</a>}
                                        </p>
                                    </li>
                                )
                            })}
                            
                        </ul>
                        {links && <ul className={s.link_list}>
                            {links?.map((l)=> {
                                return <li key={l?.id}>
                                    <a href={l?.url} target='_blank'>{l?.title}</a>
                                </li>
                            })}
                        </ul>}
                        

                            </div>

                        </li>
                    )
                })}
                </ul>
                

            </SectionWrapper>
        </section>
    )

}

export default VacancySection;