import DistanceLearningPage from "@/components/pages/DistanceLearningPage";
import { getDistanceLearningPage } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/educational_process/educational_opportunities_and_trajectory/distance_learning');

const DistanceLearning = async()=> {
    
    const res = await getDistanceLearningPage();

    if (!res) return <EmptyState/>


    return <DistanceLearningPage pageData = {res}/>
}

export default DistanceLearning;