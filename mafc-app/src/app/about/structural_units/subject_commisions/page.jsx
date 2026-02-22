
import SubjectCommissionsMembers from "@/components/modules/SubjectCommissionsMembers/SubjectCommissionsMembers";
import { getSubjectCommissionPage } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/councils_and_commissions')

const SubjectCommissions=async()=> {
    const pageData = await getSubjectCommissionPage();

    if(!pageData) return <EmptyState/>;

    const {subject_commissions_lists, google_drive_doc_folder_id, description, page_title} = pageData;
    
    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id)


return <SubjectCommissionsMembers page_title={page_title} subjectCommissionsList={subject_commissions_lists} description={description} docxList={docxList}/>
};

export default SubjectCommissions;