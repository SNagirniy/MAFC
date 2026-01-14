import YourSafetyPage from "@/components/pages/YourSafetyPage";
import {fetchDocxFromCurrentFolder } from "@/server/google/drive";
import { getYourSafetyPageData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/your_safety');

const YourSafety =async()=> {

const FolderID ='1AagnWg8SDIiap9Q1D3YGY0EODsJ9Lmdd';
 const res = await fetchDocxFromCurrentFolder(FolderID);
 const docxList = await res.json();

 const videoList = await getYourSafetyPageData();



    return <YourSafetyPage 
            docList={docxList}
            videoList={videoList}
    />
}

export default YourSafety;