
import StructureAndManagementPage from "@/components/pages/StructureAndManagementPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const StructureAndManagement = async()=> {
    const folderId = '1BvY-87ywvw4mCdnXBXw49ACcu6MOPgsF'
    const res = await fetchAllDocxFromSubfolders(folderId); 
    const docxList = await res.json();

return <StructureAndManagementPage docxList = {docxList}/>
}

export default StructureAndManagement;