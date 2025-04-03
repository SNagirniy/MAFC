
import DirectorReportPage from "@/components/pages/DirectorReportPage";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";

export const revalidate = 3600;


const DirectorReport = async()=> {
    const folderId = '1eMgKK-RwxvoLz2NN9Z-r9_8t2StxfMK2'
    const res = await fetchDocxFromCurrentFolder(folderId)
    const docxList = await res.json();
    return(
      <DirectorReportPage docxList={docxList}/>
    )
};


export default DirectorReport;