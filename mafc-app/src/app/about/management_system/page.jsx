
import MnagementSystemPage from "@/components/pages/MnagementSystemPage";
import { getAdministration } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/management_system')

const MnagementSystem = async()=> {
    const administrationData = await getAdministration();
    if(!administrationData || administrationData?.error) return <EmptyState/>


return <MnagementSystemPage pageData={administrationData}/>
}

export default MnagementSystem;