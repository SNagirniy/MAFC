import SchedulesPage from "@/components/pages/SchedulesPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const Schedules = async()=> {

     const folderId = '1a4g1So_vFzNLvIrt8fBEc4d52tIGS46Y'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <SchedulesPage schedules_list={docxList}/>

};

export default Schedules;