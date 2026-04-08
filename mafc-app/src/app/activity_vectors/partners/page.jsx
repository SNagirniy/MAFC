import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getDepartment } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import PartnerHeader from "@/components/elements/partnerHeader/PartnerHeader";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/activity_vectors/partners');

const Partners = async()=> {
    const pageRoute ='/api/partners-page';
    const pageData = await getDepartment(pageRoute);
    if(!pageData) return <EmptyState/>
    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data
    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

    const formatedPartnersList = docxList?.map((el)=> {
    const logo = el?.documents?.find(item => !item?.name.includes('pdf'));  
    const content =el?.documents?.filter(el => el?.name.includes('pdf'));
    return {header:<PartnerHeader logo={logo} title={el?.topic}/>, 
    content:content, description: el?.description}})


   
    return  <DepartmentSection 
        link_item={link} 
        page_title={page_title} 
        markdown={markdown} 
        docList={formatedPartnersList}/>

};

export default Partners;