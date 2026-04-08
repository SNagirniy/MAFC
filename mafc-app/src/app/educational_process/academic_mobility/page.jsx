import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import { getDepartment } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import PartnerHeader from "@/components/elements/partnerHeader/PartnerHeader";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/educational_process/academic_mobility');

const AcademicMobility = async()=>{

    const pageRoute ='/api/academic-mobility-page';

    const pageData = await getDepartment(pageRoute);
    if(!pageData) return <EmptyState/>

    const {page_title, markdown, link, google_drive_doc_folder_id}= pageData.data;

    const docx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

    const formatedPartnersList = docx?.map((el)=> {
    const logo = el?.documents?.find(item => !item?.name.includes('pdf'));  
    const content =el?.documents?.filter(el => el?.name.includes('pdf'));

  
    return {header:<PartnerHeader logo={logo} title={el?.topic}/>, 
    content:content}})

    return <DepartmentSection
            page_title={page_title}
            link_item={link}
            markdown={markdown}
            docList={formatedPartnersList}/>
    }


export default AcademicMobility;