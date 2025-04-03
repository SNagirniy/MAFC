
import PublicProcurementPage from "@/components/pages/PublicProcurementPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;


const PublicProcurement = async()=> {
    const folderId = '1GuDuVA-Nacucxhf8QjAXOkgMCph3TRhn'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();
    return(
      <PublicProcurementPage docxList={docxList}/>
    )
};


export default PublicProcurement;