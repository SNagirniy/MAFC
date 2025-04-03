import DocsListSection from "../modules/DocsListSection/DocsListSection";



const CollegeReportingPage = ({docxList})=> {

    const estimate = docxList?.find((el)=> el.topic.toLowerCase() === 'кошторис');
    const financial_reporting = docxList?.find((el)=> el.topic.toLowerCase() === 'фінансова звітність');

    return <>
    <DocsListSection docs_list={estimate?.documents} title={'Кошторис закладу освіти та всі зміни до нього'}/>
    <DocsListSection docs_list={financial_reporting?.documents} title={'Фінансова звітність закладу освіти'}/>
    </>
}

export default CollegeReportingPage;