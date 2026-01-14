import PedagogicalCouncilDecisionPage from "@/components/pages/PedagogicalCouncilDecisionPage";
import { fetchAllDocxFromClosedSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;


const PedagogicalCouncilDecision = async()=> {
    const folderId = '1ALYAa5x4MOBqtsj1y6IZqvpDNrPZm06i'
    const res = await fetchAllDocxFromClosedSubfolders(folderId)
    const docxList = await res.json();

    if(!docxList || docxList?.length === 0) {return <EmptyState/>}

    return <PedagogicalCouncilDecisionPage pcdList={docxList}/>
};


export default PedagogicalCouncilDecision;