import AdmissionResultsPage from "@/components/pages/AdmissionResultsPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const AdmissionResults = async()=>{

    const folderId = '1GeXqveybi1YDCJrI61ydo62aVfpzmu02'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <AdmissionResultsPage resultsList={docxList}/>
}; 


export default AdmissionResults