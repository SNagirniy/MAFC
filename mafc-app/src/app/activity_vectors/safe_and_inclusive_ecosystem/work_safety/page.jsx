import { getWorkSafetyPageData } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import YourSafetyEduSection from "@/components/modules/YourSafetyEduSection/YourSafetyEduSection";
import ModalImageGallery from "@/components/modules/ModalImageGallery/ModalImageGallery";

export const revalidate = 3600;

const WorkSafety= async()=> {

    const pageData = await getWorkSafetyPageData();

    if(!pageData) return <EmptyState/>;

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data

    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

return <>
        <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxList}/>

       {(pageData?.images && pageData?.images?.length > 0) ?? <ModalImageGallery
            title={"маршрути евакуації"}
            imagesList={pageData?.images}/>}

       {(pageData?.video_item && pageData?.video_item?.length > 0) ??
       <YourSafetyEduSection
        title={'Медіатека з безпеки'} 
        videoList={pageData?.video_item}/>}

        </>

}

export default WorkSafety;