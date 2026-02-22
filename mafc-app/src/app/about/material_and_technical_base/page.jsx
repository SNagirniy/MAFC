import MaterialAndTechnicalBasePage from "@/components/pages/MaterialAndTechnicalBasePage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getMaterialCharacteristic } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/educational_process/material_and_technical_base')

const MaterialAndTechnicalBase = async()=>{

    const folderId = '1eK2ZoOpUdV91ekmmQVNfUtTFyzUHd3aL'
    const docxList = await fetchAllDocxFromSubfolders(folderId);

    const materialCharacteristic = await getMaterialCharacteristic();

    return <MaterialAndTechnicalBasePage characteristic={materialCharacteristic} docxList={docxList}/>
}; 


export default MaterialAndTechnicalBase;