import  s from './college_contacts.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';

import { v4 } from 'uuid';

import ContactForm from '@/components/elements/contactForm/ContactForm';
import Social from '@/components/elements/social/Social';

const PhoneList = ({phoneArr}) =>{

    return (phoneArr?.map((phone) => 
            <a href={`tel:${phone}`}>{phone}</a>))};


const CollegeContacts = ({contactsData, isSocialShow = true})=> {
if(!contactsData) return null;

    const {sub_title, contact, formTitles, markdown, side_title, page} = contactsData;


    return(
        <section id='stop_corruption_anchor' className={s.section}>
            <SectionWrapper>
                <div className={s.grid_container}>
                    <div className={s.contacts_side}>
                        <h3 className={s.contacts_side_title}>{side_title}</h3>
                        {sub_title && <h4>{sub_title}</h4>}
                        {markdown && <div className="ck-content" dangerouslySetInnerHTML={{ __html: markdown }}></div>}

                        <ul className={s.contact_persons}>
                            {contact?.map((item)=> {

                                const {name, position, phone, mail, adress}= item;
                                return (
                                    <li key={v4()}>
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
                       {isSocialShow && <Social/>}
                    </div>
                    <ContactForm page={page} formTitles={formTitles}/> 
                </div>

            </SectionWrapper>
        </section>
    )

};

export default CollegeContacts;