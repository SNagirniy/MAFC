import { getDepartment } from "@/server/strapi/strapi";
import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import News from "@/components/modules/news/News";
import { getNews } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";


export const revalidate = 3600;

const TrainingAndProductionActivities= async()=> {

    const pageRoute = '/api/training-and-production-activity';
    const pageData = await getDepartment(pageRoute);

    if(!pageData) return <EmptyState/>;
   

    const {page_title,google_drive_doc_folder_id, markdown, link} = pageData?.data;

    const category = pageData?.category?.code;
    const news =await getNews(category);
    const docxList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);

return <>
    <DepartmentSection link_item={link} page_title={page_title} markdown={markdown} docList={docxList}/>
    {(news && news?.length > 0) && <News newsList={news} title={'Навчаємось. Створюємо. Впроваджуємо.'} subtitle={'Тут навчання переходить у дію: реальні проєкти, виробничі кейси, стажування та досвід, який формує конкурентних фахівців.'} category={category}/>}
</>

}

export default TrainingAndProductionActivities;