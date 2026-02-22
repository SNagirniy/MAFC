import EntrantsDocuments from "@/components/pages/EntrantsDocuments";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";


export const revalidate = 3600;



const Documents = async ()=>{
    const folderId = '1Z95-rXOpynkFKKnH7hlIz-Dl28sCY_Te';
    const docxList = await fetchAllDocxFromSubfolders(folderId);
    

 return <EntrantsDocuments docxList={docxList}/>
      
};

export default Documents;