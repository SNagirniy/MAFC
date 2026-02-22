import AcademicMobilityPage from "@/components/pages/AcademicMobilityPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/educational_process/academic_mobility');

const AcademicMobility = async()=>{

    const folderId = '1Wr9aKFLebW67fWz5OvAcEsCHaLvNQUXy'
    const docxList = await fetchAllDocxFromSubfolders(folderId);
   

    return <AcademicMobilityPage partners_list={docxList}/>
}; 


export default AcademicMobility;