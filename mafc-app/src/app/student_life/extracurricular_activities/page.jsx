import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getExtracurricularPageData } from "@/server/strapi/strapi";
import ExtracurricularActivitiesPage from "@/components/pages/ExtracurricularActivitiesPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/extracurricular_activities')

const ExtracurricularActivities = async ()=> {
const folderId = '1NJCEnO9ZsXRKrsQgY8XxiUCdZBAZfvL1';
 const res = await fetchAllDocxFromSubfolders(folderId);
 const docx = await res.json();

 const pageData = await getExtracurricularPageData();

return <ExtracurricularActivitiesPage pageData={pageData} docx={docx}/>
};

export default ExtracurricularActivities;