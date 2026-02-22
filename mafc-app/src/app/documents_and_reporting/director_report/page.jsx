
import DirectorReportPage from "@/components/pages/DirectorReportPage";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

const DirectorReport = async()=> {
    const folderId = '1eMgKK-RwxvoLz2NN9Z-r9_8t2StxfMK2'
    const docxList = await fetchDocxFromCurrentFolder(folderId)
  

      if(!docxList || docxList?.length === 0) {return <EmptyState/>}

    return(
      <DirectorReportPage docxList={docxList?.documents}/>
    )
};


export default DirectorReport;