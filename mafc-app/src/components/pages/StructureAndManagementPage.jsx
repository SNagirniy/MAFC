import StructureAndManagementSection from "../modules/StructureAndManagement/StructureAndManagementSection";
import OrganizationsStructure from "../modules/OrganizationsStructure/OrganizationsStructure";
import AccordionComponent from "../modules/Accordion/Accordion";

const StructureAndManagementPage = ({pageData, docxList})=> {

const {organization_structure,administrations } = pageData;


    return(
        <>
        <StructureAndManagementSection personsDataArray={administrations} title={'адміністрація коледжу'}/>
        <OrganizationsStructure structure_image_obj = {organization_structure}/>
        <AccordionComponent data={docxList}/>
        </>
    )
};

export default StructureAndManagementPage;