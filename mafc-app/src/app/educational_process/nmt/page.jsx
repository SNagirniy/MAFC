import NMTPage from "@/components/pages/NMTPage";
import { getNMTData } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/educational_process/nmt');

const NMT = async()=> {

    const res = await getNMTData();

    return <NMTPage nmtPageData={res}/>
};

export default NMT;