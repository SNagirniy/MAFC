import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { getIntelligentNetworkingPageData } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import ModalImageGallery from "@/components/modules/ModalImageGallery/ModalImageGallery";
import ExtracurricularActividyCardsSection from "@/components/modules/ExtracurricularActividyCardsSection/ExtracurricularActividyCardsSection";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/teaching_field/intelligent_networking');


const IntelligentNetworking = async ()=>{

    const pageData = await getIntelligentNetworkingPageData();
    if(!pageData) return <EmptyState/>

    const {page_title, markdown, link, google_drive_doc_folder_id}= pageData.data;

    const docx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

    return <>
            <DepartmentSection
            page_title={page_title}
            link_item={link}
            markdown={markdown}
            docList={docx}/>
            
            <ExtracurricularActividyCardsSection rootPath={'/teaching_field/intelligent_networking/'} activities={pageData?.intelligent_networking_activities}/>

            {(pageData?.images && pageData?.images?.length > 0) && <ModalImageGallery title={'нагороди та сертифікати'} imagesList={pageData?.images}/>}
            </>

};

export default IntelligentNetworking;