import DocsListSection from "../modules/DocsListSection/DocsListSection";
import { v4 } from "uuid";
import AccordionComponent from "../modules/Accordion/Accordion";


const PublicProcurementPage = ({docxList})=> {

        const ProzorroWebSite = {
        id: v4(),
        name: 'Тендери', 
        webViewLink: 'https://prozorro.gov.ua/uk/search/tender?buyer=36969901'
    };

    const prozoro = docxList?.find((el)=> el.topic.toLowerCase() === 'prozoro');
    const justification = docxList?.find((el)=> el.topic.toLowerCase() === 'обгрунтування');

    prozoro?.documents?.push(ProzorroWebSite)

return(
    <>
    <DocsListSection docs_list={prozoro?.documents} title={'Система публічних закупівель PROZORO'}/>
    <AccordionComponent title={'Обгрунтування технічних та якісних характеристик предмета закупівлі'} data={[{header: 'Обгрунтування технічних та якісних характеристик предмета закупівлі', content: justification?.documents}]}/>
    </>
)

}

export default PublicProcurementPage;