import EduMonitoringPage from "@/components/pages/EduMonitoringPage";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/educational_process/monitoring_the_quality_of_education');

const EduMonitoring = async()=>{

    const folderId = '1iskxoFgG6nDbAi0AP2VUp_qiZAiWWDFr'
    const docxList = await fetchDocxFromCurrentFolder(folderId);
 

    return <EduMonitoringPage docxList={docxList.documents}/>
}; 


export default EduMonitoring;