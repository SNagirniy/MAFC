import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getExtracurricularPageData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import ExtracurricularActividyCardsSection from "@/components/modules/ExtracurricularActividyCardsSection/ExtracurricularActividyCardsSection";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/extracurricular_activities');

const ExtracurricularActivities = async ()=> {
    
const pageData = await getExtracurricularPageData();
if(!pageData) return <EmptyState/>

const {page_title, markdown, link, google_drive_doc_folder_id} = pageData?.data;

const docx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);


return <>
        <DepartmentSection
            page_title={page_title}
            markdown={markdown}
            link_item={link}
            docList={docx}/>
        {pageData?.extracurricular_activities_lists?.length > 0 && <ExtracurricularActividyCardsSection
            activities={pageData?.extracurricular_activities_lists} rootPath={'/student_life/extracurricular_activities/'}/>}
        </>
};

export default ExtracurricularActivities;