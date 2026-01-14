import AccordionComponent from "../modules/Accordion/Accordion";
import GallerySection from "../modules/GallerySection/GallerySection";
import LargeSocialPanel from "../elements/social/LargeSocialPanel";
import ExtracurricularActividyCardsSection from "../modules/ExtracurricularActividyCardsSection/ExtracurricularActividyCardsSection";
import EmptyState from "../modules/EmptyState/EmptyState";

const ExtracurricularActivitiesPage = ({pageData,docx})=> {
    if(!pageData && !docx) return <EmptyState/>;


    const docxToRender=docx?.sort((a,b)=> a?.description - b?.description);
return <>
        <AccordionComponent 
            title={'Позанавчальна діяльність'}
            data={docxToRender}/>
            <ExtracurricularActividyCardsSection activities={pageData?. extracurricular_activities_lists}/>
            <GallerySection imageArr={pageData?.images}/> 
            <LargeSocialPanel title={'Шукай нас у стрічці'}/>  
        </>};


export default ExtracurricularActivitiesPage;