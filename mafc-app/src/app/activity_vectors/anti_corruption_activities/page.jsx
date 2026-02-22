import AntiCorruptionPage from "@/components/pages/AntiCorruptionPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getContactsData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;


export const metadata = generateStaticPageMeta('/activity_vectors/anti_corruption_activities')

const AntiCorruption = async()=> {

    const folderId = '1BCkVtATZvNkzFNa-b3INCMZWNWunwRt3'
    const docxList = await fetchAllDocxFromSubfolders(folderId);
    

    const pageData= await getContactsData('anti_corruption')

    return <AntiCorruptionPage pageData={pageData?.[0]} activity_data={docxList}/>

};

export default AntiCorruption;