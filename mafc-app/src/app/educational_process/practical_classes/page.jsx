import PracticalClassesPage from "@/components/pages/PracticalClassesPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const PracticalClasses = async()=>{

    const folderId = '1bK4AtDaciNIok8za81lhg2fmO_ntWVH7'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    const practicalProgramsfolderId = '11YUjYz-TUEV0b-Bhl8ZcVIt9CxJ5ZRcs'
    const practicalProgramsRes = await fetchAllDocxFromSubfolders(practicalProgramsfolderId);
    const practicalProgramsList = await practicalProgramsRes.json();

    return <PracticalClassesPage practicalProgramsList={practicalProgramsList} doc_list={docxList}/>
}; 


export default PracticalClasses