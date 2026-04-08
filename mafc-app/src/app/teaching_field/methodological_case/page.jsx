import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { getDepartment } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/teaching_field/methodological_case');

const MetodologicalCase = async ()=>{
    const pageRoute ='/api/metodological-case-page';

    const pageData = await getDepartment(pageRoute);
    if(!pageData) return <EmptyState/>

    const {page_title, markdown, link, google_drive_doc_folder_id}= pageData.data;

    const docx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

    return <DepartmentSection
            page_title={page_title}
            link_item={link}
            markdown={markdown}
            docList={docx}/>

};

export default MetodologicalCase;