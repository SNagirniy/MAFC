import AdmissionResultsSection from "@/components/modules/AdmissionResultsSection/AdmissionResultsSection";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { getIntroductoryQuidePageData } from "@/server/strapi/strapi";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/entrants/admission_results/initial_test_results');

const InitialTestResults = async()=>{

    const pageData = await getIntroductoryQuidePageData();
    if(!pageData) return <EmptyState/>

    const {folder_id, title} = pageData.initial_test_results_google_drive_folder;
    const docxList = await fetchAllDocxFromSubfolders(folder_id);

    if(!docxList) return <EmptyState/>
   

    return <AdmissionResultsSection title={title} resultsList={docxList}/>
}; 


export default InitialTestResults;