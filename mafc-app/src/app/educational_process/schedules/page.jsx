import EmptyState from "@/components/modules/EmptyState/EmptyState";
import SchedulesPage from "@/components/pages/SchedulesPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";


export const revalidate = 3600;
export const metadata = generateStaticPageMeta('educational_process/schedules')

const Schedules = async()=> {

    const folderId = '1a4g1So_vFzNLvIrt8fBEc4d52tIGS46Y'
    const res = await fetchAllDocxFromSubfolders(folderId);
   
    if(!res) return <EmptyState/>
const docxList = [...(res || [])].sort((a,b)=> a.description - b.description)

    return <SchedulesPage schedules_list={docxList}/>

};

export default Schedules;