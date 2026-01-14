import DocsListSection from "../modules/DocsListSection/DocsListSection";
import EmptyState from "../modules/EmptyState/EmptyState";


const CollegeReportingPage = ({docxList})=> {
if(!docxList || docxList?.length === 0) {return <EmptyState/>};


    return <>
    {docxList && docxList?.map((el)=> {
        return <DocsListSection docs_list={el?.documents} title={el?.topic}/>
    })}
    </>
}

export default CollegeReportingPage;