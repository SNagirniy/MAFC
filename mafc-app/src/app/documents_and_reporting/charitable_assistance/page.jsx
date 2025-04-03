import CharitableAssistancePage from "@/components/pages/CharitableAssistancePage"
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
export const revalidate = 3600;

const CharitableAssistance = async()=>{
    const folderId = '1GQIKIzO5Ub4Wex5WT1t3unnN_tLvpncm'
    const res = await fetchDocxFromCurrentFolder(folderId);
    const docxList = await res.json();

return <CharitableAssistancePage docxList={docxList}/>

}

export default CharitableAssistance;