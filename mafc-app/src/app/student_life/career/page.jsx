import { getCareerPage } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import CarrerPage from "@/components/pages/CareerPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/career');

const Career= async()=>{
const folderId='15DTUwx9rzV_VO1XTB_aPHZbiKIk_YjWq';
const pageData = await getCareerPage();
const docList = await fetchAllDocxFromSubfolders(folderId);



    return <CarrerPage docList={docList} pageData={pageData}/>
};

export default Career;