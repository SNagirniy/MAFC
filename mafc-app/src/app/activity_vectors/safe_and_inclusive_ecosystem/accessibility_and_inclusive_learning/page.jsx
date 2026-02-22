import { getAccessibilityAndInclusiveLearningPageData } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import GallerySection from "@/components/modules/GallerySection/GallerySection";
import HotlineAndComplaintBox from "@/components/modules/HotlineAndComplaintBox/HotlineAndComplaintBox";
import SectionWrapper from "@/components/layouts/SectionWrapper";



export const revalidate = 3600;

const AccessibilityAndInclusiveLearning= async()=> {

    const pageData = await getAccessibilityAndInclusiveLearningPageData();

    if(!pageData) return <EmptyState/>;

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data

    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);
    const docxAndinstructions = [...(docxList || []), ...(pageData?.insructions || [])];

return <>
        <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxAndinstructions}/>
        <GallerySection title={"Архітектурна доступність"} imageArr={pageData?.images}/>
        <section>
            <SectionWrapper>
                <HotlineAndComplaintBox 
                description={'Якщо ви виявили фізичний, інформаційний чи організаційний бар’єр у коледжі — повідомте нам. Ваше звернення допоможе зробити освітнє середовище доступнішим для всіх.'}
                title={"Повідомити про бар'єр у коледжі"}/>
            </SectionWrapper>
        </section>
        
        </>

}

export default AccessibilityAndInclusiveLearning;