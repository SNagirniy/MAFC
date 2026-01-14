import CouncilsAndCommissionsPage from "@/components/pages/CouncilsAndCommissionsPage";
import { getSubjectCommissionsList } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/councils_and_commissions')

const CouncilsAndCommissions=async()=> {
    const folderId = '1-d1uLH9PJJGGPxTeJDTwCqwRqPpGTVcM'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();
    const subjectCommissionsList = await getSubjectCommissionsList();

return <CouncilsAndCommissionsPage 
        subjectCommissionsList={subjectCommissionsList}
        councils_and_commissions_data={docxList}/>
};

export default CouncilsAndCommissions;