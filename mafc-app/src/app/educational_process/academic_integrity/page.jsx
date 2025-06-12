import AcademicIntegrityPage from "@/components/pages/AcademicIntegrityPage";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";

export const revalidate = 3600;

const AcademicIntegrity = async()=>{

    const folderId = '1Tgqm1KTDMAsyG0YzyTqp7YxJbbWMvULC'
    const res = await fetchDocxFromCurrentFolder(folderId);
    const docxList = await res.json();

    return <AcademicIntegrityPage docxList={docxList}/>
}; 


export default AcademicIntegrity;