import PartnersPage from "@/components/pages/PartnersPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/partners')

const Partners = async()=> {

    const folderId = '1O_Bd3S0m1Q4_pXz0c_c-pJf_WffHI8-R'
    const docxList = await fetchAllDocxFromSubfolders(folderId);
   

   

    return <PartnersPage partners_list={docxList}/>

};

export default Partners;