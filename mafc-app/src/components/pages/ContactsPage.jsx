import CollegeContacts from "../modules/CollegeContacts/CollegeContacts";
import EmptyState from "../modules/EmptyState/EmptyState";


const ContactsPage = ({pageData})=> {
    if(!pageData) return <EmptyState/>
    return <CollegeContacts contactsData={pageData}/>
}

export default ContactsPage;