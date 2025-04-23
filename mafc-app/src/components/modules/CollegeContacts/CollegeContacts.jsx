import  s from './college_contacts.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import collegeContacts from '@/utils/college_contacts';
import { v4 } from 'uuid';

import ContactForm from '@/components/elements/contactForm/ContactForm';
import Social from '@/components/elements/social/Social';


const CollegeContacts = ()=> {
    const {director, deputy, contact_person, admissions_committee, info} = collegeContacts;

    const contactPersons= [director, deputy, contact_person];

    return(
        <section className={s.section}>
            <SectionWrapper>
                <div className={s.grid_container}>
                    <div className={s.contacts_side}>
                        <h3 className={s.contacts_side_title}>Наші контакти</h3>
                        <h4>{collegeContacts?.title.uk}</h4>
                        <p className={s.adress}>
                            <span>адреса:</span>
                            <span>{collegeContacts?.adress.uk}</span>
                        </p>

                        <ul className={s.contact_persons}>
                            {contactPersons?.map((item)=> {
                                return (
                                    <li key={v4()}>
                                        <p className={s.position}>
                                        <span>{item.position}</span>
                                        <span>{item.name}</span>
                                         <a href={`tel:${item.phone}`}>{item.phone}</a>
                                         <a href={`mailto:${item.mail}`}>{item.mail}</a>
                                        </p>
                                    </li>
                                )
                            })}
                            
                        </ul>
                        <div className={s.contact_persons}>
                            <p className={s.position}>
                            <span>приймальна комісія</span>
                            <a href={`tel:${admissions_committee.phone}`}>{admissions_committee.phone}</a>
                            <a href={`tel:${admissions_committee.mobile}`}>{admissions_committee.mobile}</a>
                            </p>
                        </div>

                        <div className={s.contact_persons}>
                            <p className={s.position}>
                            <span>телефони для довідок</span>
                            {info.map(tel=> <a  key={v4()} href={`tel:${tel}`}>{tel}</a>)}
                            </p>
                        </div>

                        <Social isFooter={true}/>

                    </div>

                    <ContactForm/> 
                    

                </div>

            </SectionWrapper>
        </section>
    )

};

export default CollegeContacts;