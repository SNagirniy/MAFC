import { fetchAllDocxFromSubfolders} from "@/server/google/drive";
import { getDomitoryPageData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import GallerySection from "@/components/modules/GallerySection/GallerySection";
import StudentGovernmentSection from "@/components/modules/StudentGovernmentSection/StudentGovernmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/dormitory');

const Dormitory = async ()=> {
   
   const pageData = await getDomitoryPageData();
   if(!pageData) return <EmptyState/>

    const {page_title, markdown,google_drive_doc_folder_id, link} = pageData?.data;

    const pageDocx = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

   


return <>
        <DepartmentSection 
                page_title={page_title}
                markdown={markdown}
                docList={pageDocx}
                link_item={link}/>
            {(pageData?.domitory_governments && pageData?.domitory_governments?.length > 0) &&<StudentGovernmentSection stud_list={pageData?.domitory_governments} title={'Рада гуртожитку'}/>} 
            {(pageData?.images && pageData?.images?.length > 0)  && <GallerySection title={"Умови проживання"} imageArr={pageData?.images}/>}
        </>
};

export default Dormitory