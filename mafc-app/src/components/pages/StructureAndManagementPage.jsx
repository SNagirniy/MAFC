import StructureAndManagementSection from "../modules/StructureAndManagement/StructureAndManagementSection";
import DocsListSection from "../modules/DocsListSection/DocsListSection";
import findDocuments from "@/utils/findDocuments";

const StructureAndManagementPage = ({docxList})=> {

    const CollectiveAgreement = findDocuments(docxList, 'колективний договір');
    const JobInstructions = findDocuments(docxList, 'посадові інструкції');

    return(
        <>
        <StructureAndManagementSection/>
        <DocsListSection docs_list={CollectiveAgreement?.documents} title={'Колективний договір'}/>
        <DocsListSection docs_list={JobInstructions?.documents} title={'Посадові інструкції працівників закладу освіти'}/>
        </>
    )
};

export default StructureAndManagementPage;