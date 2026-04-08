
import RulesOfConductPage from "@/components/pages/RulesOfConductPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getDepartment } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/students_rights_and_obligations');

const StudentsRightsAndObligations = async()=> {
    const pageRoute = '/api/students-rights-and-obligations-page';
    const pageData = await getDepartment(pageRoute);

    if(!pageData) return <EmptyState/>;
    const {page_title, google_drive_doc_folder_id} = pageData;

    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);
  

return <RulesOfConductPage page_title={page_title} docList={docxList}/>
};

export default StudentsRightsAndObligations;