import MaterialAndTechnicalBasePage from "@/components/pages/MaterialAndTechnicalBasePage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const MaterialAndTechnicalBase = async()=>{

    const folderId = '1eK2ZoOpUdV91ekmmQVNfUtTFyzUHd3aL'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <MaterialAndTechnicalBasePage docxList={docxList}/>
}; 


export default MaterialAndTechnicalBase;