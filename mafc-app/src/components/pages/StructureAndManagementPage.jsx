import StructureAndManagementSection from "../modules/StructureAndManagement/StructureAndManagementSection";
import DocsListSection from "../modules/DocsListSection/DocsListSection";
import findDocuments from "@/utils/findDocuments";
import OrganizationsStructure from "../modules/OrganizationsStructure/OrganizationsStructure";

const StructureAndManagementPage = ({docxList})=> {

    const CollectiveAgreement = findDocuments(docxList, 'колективний договір');
    const JobInstructions = findDocuments(docxList, 'посадові інструкції');
    const Structure = findDocuments(docxList, 'організаційна структура');

   

    return(
        <>
        <StructureAndManagementSection/>
        <OrganizationsStructure structure_image = {Structure?.documents}/>
        <DocsListSection docs_list={CollectiveAgreement?.documents} title={'Колективний договір'}/>
        <DocsListSection docs_list={JobInstructions?.documents} title={'Посадові інструкції працівників закладу освіти'}/>
        </>
    )
};

export default StructureAndManagementPage;