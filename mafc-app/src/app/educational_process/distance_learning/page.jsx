import DistanceLearningPage from "@/components/pages/DistanceLearningPage";
import { getDistanceLearningPage } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/educational_process/distance_learning');

const DistanceLearning = async()=> {
    
    const res = await getDistanceLearningPage();

    return <DistanceLearningPage pageData = {res}/>
}

export default DistanceLearning;