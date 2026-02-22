import PracticalClassesPage from "@/components/pages/PracticalClassesPage";
import { fetchAllDocxFromSubfolders, fetchAllDocxFromClosedSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/educational_process/practical_classes');

const PracticalClasses = async()=>{

    const folderId = '1bK4AtDaciNIok8za81lhg2fmO_ntWVH7'
    const docxList = await fetchAllDocxFromSubfolders(folderId);
   

    const practicalProgramsfolderId = '11YUjYz-TUEV0b-Bhl8ZcVIt9CxJ5ZRcs'
    const practicalProgramsRes = await fetchAllDocxFromClosedSubfolders(practicalProgramsfolderId);
    const practicalProgramsList = await practicalProgramsRes.json();

    return <PracticalClassesPage practicalProgramsList={practicalProgramsList} doc_list={docxList}/>
}; 


export default PracticalClasses