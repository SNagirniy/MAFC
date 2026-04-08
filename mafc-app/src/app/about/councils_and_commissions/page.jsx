import CouncilsAndCommissionsPage from "@/components/pages/CouncilsAndCommissionsPage";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { getCouncilsAndCommissionPageData} from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders, fetchAllDocxFromClosedSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/councils_and_commissions')

const CouncilsAndCommissions=async()=> {
  

    const pageData = await getCouncilsAndCommissionPageData();
    if(!pageData) return <EmptyState/>

    const {page_title, pedagogical_council_folder_id, all_commission_folder_id}= pageData;

  
    const allCommissiondocxList = await fetchAllDocxFromSubfolders(all_commission_folder_id?.folder_id);
    const pedagogicalCouncilDocx = await fetchAllDocxFromClosedSubfolders(pedagogical_council_folder_id?.folder_id);
  

return <CouncilsAndCommissionsPage 
    page_title={page_title}
    allCommission={{all_commission_folder_id, docx: allCommissiondocxList}}
    pedagogical_council={{pedagogical_council_folder_id, docx: pedagogicalCouncilDocx}}
/>
};

export default CouncilsAndCommissions;