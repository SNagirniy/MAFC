import CouncilsAndCommissionsPage from "@/components/pages/CouncilsAndCommissionsPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/councils_and_commissions')

const CouncilsAndCommissions=async()=> {
    const folderId = '1-d1uLH9PJJGGPxTeJDTwCqwRqPpGTVcM'
    const docxList = await fetchAllDocxFromSubfolders(folderId);

return <CouncilsAndCommissionsPage 
        councils_and_commissions_data={docxList}/>
};

export default CouncilsAndCommissions;