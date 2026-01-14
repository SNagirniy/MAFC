
import StructureAndManagementPage from "@/components/pages/StructureAndManagementPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getAdministration } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/structure_and_management')

const StructureAndManagement = async()=> {
    const administrationData = await getAdministration();
    if(!administrationData || administrationData?.error) return <EmptyState/>

    const folderId = administrationData?.administration_google_drive_folderID;
    const res = await fetchAllDocxFromSubfolders(folderId); 
    const docxList = await res.json();

   

return <StructureAndManagementPage pageData={administrationData} docxList = {docxList}/>
}

export default StructureAndManagement;