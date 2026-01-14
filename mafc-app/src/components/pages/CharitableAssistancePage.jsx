import DocsListSection from "../modules/DocsListSection/DocsListSection";
import EmptyState from "../modules/EmptyState/EmptyState";



const CharitableAssistancePage = ({docxList})=> {

    if(!docxList || docxList?.length === 0){return <EmptyState/>}

    return <DocsListSection docs_list={docxList} title={'Інформація про перелік товарів, робіт і послуг, отриманих як благодійна допомога закладом освіти'}/>
}

export default CharitableAssistancePage;