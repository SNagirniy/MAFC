
import StructureAndManagementSection from "../modules/StructureAndManagement/StructureAndManagementSection";
import News from "../modules/news/News";
import BackButton from "../elements/backButton/BackButton";
import DocsListSection from "../modules/DocsListSection/DocsListSection";
import EmptyState from "../modules/EmptyState/EmptyState";




const ComissionPage = ({category,news,commissionData, docs_list})=> {
    if(!commissionData || commissionData.length === 0) return <EmptyState/>;
    const {title, members} = commissionData[0];
    
return(
    <>
        <BackButton/>
        <StructureAndManagementSection personsDataArray={members} title={title}/>
        <News category={category} newsList={news} title={'Діяльність циклової комісії'} subtitle={'Останні новини з навчально-методичної діяльності нашої циклової комісії'}/>
        <DocsListSection docs_list={docs_list} title={'Документи та плани роботи'}/>
    </>
)
}

export default ComissionPage;