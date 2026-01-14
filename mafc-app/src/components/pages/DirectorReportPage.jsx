import DocsListSection from "../modules/DocsListSection/DocsListSection";
import EmptyState from "../modules/EmptyState/EmptyState";


const DirectorReportPage = ({docxList})=> {
    if(!docxList || docxList?.length === 0) return <EmptyState/>;

    return <DocsListSection docs_list={docxList} title={'Звіт про діяльність керівника закладу освіти'}/>
}

export default DirectorReportPage;