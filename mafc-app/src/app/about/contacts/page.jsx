import ContactsPage from "@/components/pages/ContactsPage";
import { getContactsData, getSocialMediaData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/contacts')

const Contacts = async()=> {
    const pageData = await getContactsData('contact');
     if(!pageData) return <EmptyState/>
     const social = await getSocialMediaData()

    return <ContactsPage social={social} pageData={pageData?.[0]}/>
}

export default Contacts;