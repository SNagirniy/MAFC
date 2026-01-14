import { v4 } from "uuid";
import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";


const PublicProcurementPage = ({docxList})=> {

    if(!docxList || docxList?.length === 0) return <EmptyState/>;

    const ProzorroWebSite = {
        id: v4(),
        name: 'Тендери', 
        webViewLink: 'https://prozorro.gov.ua/uk/search/tender?buyer=36969901'
    };

    const Prozoro ={folderId: v4(), topic: 'Система публічних закупівель PROZORO', description: '0', documents: [ProzorroWebSite ] }

    const FoldersToRender = [Prozoro, ... docxList];
   

return(
    <>
    {FoldersToRender?.map((el)=> {return <AccordionComponent key={el?.folderId} folderId={el?.folderId} title={el?.topic} data={[el]}/>})}
    </>
)

}

export default PublicProcurementPage;