import ContactsPage from "@/components/pages/ContactsPage";
import { getContactsData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/contacts')

const Contacts = async()=> {
    const pageData = await getContactsData('contact');

    return <ContactsPage pageData={pageData?.[0]}/>
}

export default Contacts;