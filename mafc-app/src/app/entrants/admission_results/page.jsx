import AdmissionResultsPage from "@/components/pages/AdmissionResultsPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/entrants/admission_results');

const AdmissionResults = async()=>{

    const folderId = '1GeXqveybi1YDCJrI61ydo62aVfpzmu02'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <AdmissionResultsPage resultsList={docxList}/>
}; 


export default AdmissionResults