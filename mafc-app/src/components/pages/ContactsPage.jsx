import CollegeContacts from "../modules/CollegeContacts/CollegeContacts";

const ContactsPage = ({social,pageData})=> {
   
    return <CollegeContacts social={social} contactsData={pageData}/>
}

export default ContactsPage;