import RegulatoryDocumentsPage from "@/components/pages/RegulatoryDocumentsPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getRegulatoryDocumentsPage } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";


export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/regulatory_documents')


const RegulatoryDocuments = async()=> {
    const pageData = await getRegulatoryDocumentsPage();

    if(!pageData || pageData?.error) return <EmptyState/>;

    const folderId = pageData?.regulatory_documents_google_drive_folderID;
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <RegulatoryDocumentsPage pageData={pageData} docxList={docxList}/>
}

export default RegulatoryDocuments;