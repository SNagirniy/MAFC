import DocsListSection from "../modules/DocsListSection/DocsListSection";
import EmptyState from "../modules/EmptyState/EmptyState";



const EduMonitoringPage = ({docxList})=> {
    if(!docxList || docxList?.length === 0) return <EmptyState/>;

    return <DocsListSection docs_list={docxList} title={'Моніторинг якості освіти'}/>
}

export default EduMonitoringPage;