import AccordionComponent from "@/components/modules/Accordion/Accordion";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { v4 } from "uuid";


export const revalidate = 3600;


const FinancialTransparency= async()=> {

    const folderID='1i2WQgD0Et-TqKu0oVHF97GV9vrtk9hXb';
    const res = await fetchAllDocxFromSubfolders(folderID);

    if(!res) return <EmptyState/>
     const ProzorroWebSite = {
        id: v4(),
        name: 'Тендери', 
        webViewLink: 'https://prozorro.gov.ua/uk/search/tender?buyer=36969901'
    };
    const Prozoro ={folderId: v4(), topic: 'Система публічних закупівель PROZORO', description: '0', documents: [ProzorroWebSite ] }

    const docx_list = [...(res ?? [])].sort((a, b) => a?.description - b?.description);

    const docx_to_render = [...docx_list, Prozoro]

    return <AccordionComponent title={'ФІНАНСОВА ПРОЗОРІСТЬ'} data={docx_to_render}/>

}

export default FinancialTransparency;