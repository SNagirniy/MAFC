import CharitableAssistancePage from "@/components/pages/CharitableAssistancePage"
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
export const revalidate = 3600;

const CharitableAssistance = async()=>{
    const folderId = '1GQIKIzO5Ub4Wex5WT1t3unnN_tLvpncm'
    const res = await fetchDocxFromCurrentFolder(folderId);
    const docxList = await res.json();

if(!docxList || docxList?.length === 0) {return <EmptyState/>}

return <CharitableAssistancePage docxList={docxList}/>

}

export default CharitableAssistance;