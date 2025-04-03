import RegulatoryDocumentsPage from "@/components/pages/RegulatoryDocumentsPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const RegulatoryDocuments = async()=> {
    const folderId = '1oDMDU8YAFvY7XyBrv4Za6TykF44KUWCy'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <RegulatoryDocumentsPage docxList={docxList}/>
}

export default RegulatoryDocuments;