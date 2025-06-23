import StructureAndManagementSection from "../modules/StructureAndManagement/StructureAndManagementSection";
import DocsListSection from "../modules/DocsListSection/DocsListSection";
import findDocuments from "@/utils/findDocuments";
import OrganizationsStructure from "../modules/OrganizationsStructure/OrganizationsStructure";
import AccordionComponent from "../modules/Accordion/Accordion";

const StructureAndManagementPage = ({docxList})=> {

    const CollectiveAgreement = findDocuments(docxList, 'колективний договір');
    const JobInstructions = findDocuments(docxList, 'посадові інструкції');
    const Structure = findDocuments(docxList, 'організаційна структура');
    const StaffingTable = findDocuments(docxList, 'штатний розпис закладу освіти');

 const accortdionData = docxList?.filter(el => el?.topic !== 'організаційна структура');


    return(
        <>
        <StructureAndManagementSection title={'адміністрація коледжу'}/>
        <OrganizationsStructure structure_image = {Structure?.documents}/>
        <AccordionComponent data={accortdionData}/>
        </>
    )
};

export default StructureAndManagementPage;