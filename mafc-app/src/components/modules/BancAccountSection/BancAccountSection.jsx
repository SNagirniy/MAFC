import s from './bank_account_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';

const BanckAccountSection = ({pageData})=> {
if(!pageData) return null;

const {title, account } = pageData;

return (
    <section>
        <SectionWrapper>
            <h3 className={s.main_title}>{title}</h3>
            <ul className={s.list}>
                {account.map(({service_title, IBAN, organizationID, check_data, id})=> {
                    return <li className={s.list_item} key={id}>
                        <p className={s.service}><span>Назва послуги</span><span>{service_title}</span></p>
                        <p className={s.service}><span>IBAN</span><span>{IBAN}</span></p>
                        <p className={s.service}><span>Код ЄДРПОУ</span><span>{organizationID}</span></p>
                        <p className={s.service}><span>Призначення платежу</span><span>{check_data}</span></p>
                    </li>
                })}
            </ul>
        </SectionWrapper>
    </section>
)

};

export default BanckAccountSection;

