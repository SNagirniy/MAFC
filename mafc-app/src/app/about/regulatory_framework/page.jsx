import RegulatoryDocumentsPage from "@/components/pages/RegulatoryDocumentsPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getRegulatoryDocumentsPage } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";


export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/regulatory_documents')


const RegulatoryFramework = async()=> {
    const pageData = await getRegulatoryDocumentsPage();
    

    if(!pageData || pageData?.error) return <EmptyState/>;

    const {document_link_list, page_title, license, google_drive_doc_folder_id} = pageData;

  const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id)
   
    

    return <RegulatoryDocumentsPage 
        foldersList={docxList}
        page_title={page_title}
        license={license}
        document_link_list={document_link_list}/>
}

export default RegulatoryFramework;