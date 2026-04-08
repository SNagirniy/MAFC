import { getDepartment, getIntroductoryQuidePageData } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import OptionalSubjects from "@/components/elements/optionalSubjects/OptionalSubjects";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/educational_process/educational_opportunities_and_trajectory/optional_subjects');


const OptionalSubjectsPage = async()=>{
    const pageRoute = '/api/optional-subjects-page';

    const pageData = await getDepartment(pageRoute);
    if (!pageData) return <EmptyState/>;


    const proffesionsData = await getIntroductoryQuidePageData();
    const {page_title, markdown, google_drive_doc_folder_id, link} = pageData?.data;
    const pageDocs = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id)

return (
    <>
        <DepartmentSection 
            page_title={page_title}
            markdown={markdown}
            link_item={link}
            docList={pageDocs}/>

        <OptionalSubjects
            professions={proffesionsData?.professions}
            rootPath={'/educational_process/educational_programs'}
            title={page_title}
                />    
    </>
)

}

export default OptionalSubjectsPage;