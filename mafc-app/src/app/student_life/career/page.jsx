import { getCareerPage } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import CarrerPage from "@/components/pages/CareerPage";

export const revalidate = 3600;

const Career= async()=>{
const folderId='15DTUwx9rzV_VO1XTB_aPHZbiKIk_YjWq';
const pageData = await getCareerPage();
const res = await fetchAllDocxFromSubfolders(folderId);
const docList = await res.json();


    return <CarrerPage docList={docList} pageData={pageData}/>
};

export default Career;