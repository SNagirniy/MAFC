import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { getDepartment } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/entrants/admission_rules/special_entry_conditions');

const SpecialEntryConditions = async()=>{
const pageRoute='/api/special-entry-conditions-page';

const pageData = await getDepartment(pageRoute);

if(!pageData) return <EmptyState/>

const {page_title, markdown, link, google_drive_doc_folder_id} = pageData?.data;

const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

    return <DepartmentSection
                page_title={page_title}
                markdown={markdown}
                link_item={link}
                docList={docxList}/>

}

export default SpecialEntryConditions;