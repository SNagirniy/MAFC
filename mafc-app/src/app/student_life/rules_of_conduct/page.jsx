
import RulesOfConductPage from "@/components/pages/RulesOfConductPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/rules_of_conduct');

const RulesOfConduct = async()=> {
    const folderId = '1ENdyf0t_fxRmx1RkCzy52XV6O_r1C3w6'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

return <RulesOfConductPage docList={docxList}/>
};

export default RulesOfConduct;