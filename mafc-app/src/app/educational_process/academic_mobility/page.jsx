import AcademicMobilityPage from "@/components/pages/AcademicMobilityPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const AcademicMobility = async()=>{

    const folderId = '1Wr9aKFLebW67fWz5OvAcEsCHaLvNQUXy'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <AcademicMobilityPage partners_list={docxList}/>
}; 


export default AcademicMobility;