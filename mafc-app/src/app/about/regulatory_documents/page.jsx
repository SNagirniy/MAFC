import RegulatoryDocumentsPage from "@/components/pages/RegulatoryDocumentsPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";




export async function getStaticProps() {
    const folderId = '1oDMDU8YAFvY7XyBrv4Za6TykF44KUWCy'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();
   
    return {
      props: { docxList },
      revalidate: 3600,
    }
  }

const RegulatoryDocuments = async({docxList})=> {
    

    return <RegulatoryDocumentsPage docxList={docxList}/>
}

export default RegulatoryDocuments;