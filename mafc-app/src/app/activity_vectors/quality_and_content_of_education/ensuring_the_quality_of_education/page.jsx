import { getDepartment } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

const EnsuringTheQualityOfEducation= async()=> {

    const pageRoute = '/api/ensuring-the-quality-of-education-page';
    const pageData = await getDepartment(pageRoute);

    if(!pageData) return <EmptyState/>;

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data;
   
    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

return <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxList}/>

}

export default EnsuringTheQualityOfEducation;