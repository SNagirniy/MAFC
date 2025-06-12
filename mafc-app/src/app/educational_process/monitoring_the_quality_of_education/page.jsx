import EduMonitoringPage from "@/components/pages/EduMonitoringPage";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";

export const revalidate = 3600;

const EduMonitoring = async()=>{

    const folderId = '1iskxoFgG6nDbAi0AP2VUp_qiZAiWWDFr'
    const res = await fetchDocxFromCurrentFolder(folderId);
    const docxList = await res.json();

    return <EduMonitoringPage docxList={docxList}/>
}; 


export default EduMonitoring;