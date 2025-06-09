import AntiCorruptionPage from "@/components/pages/AntiCorruptionPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const AntiCorruption = async()=> {

     const folderId = '1BCkVtATZvNkzFNa-b3INCMZWNWunwRt3'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return <AntiCorruptionPage activity_data={docxList}/>

};

export default AntiCorruption;