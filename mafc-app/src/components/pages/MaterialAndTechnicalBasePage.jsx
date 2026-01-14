import AccordionComponent from "../modules/Accordion/Accordion";
import GallerySection from "../modules/GallerySection/GallerySection";
import RteTextBox from "../elements/rteTextBox/RteTextBox";
import EmptyState from "../modules/EmptyState/EmptyState";

const MaterialAndTechnicalBasePage = ({docxList, characteristic})=> {
if(!characteristic && !docxList) return <EmptyState/>;

return <>
        <AccordionComponent data={docxList} title={'матеріально-технічна база'}/>
        <RteTextBox markdown={characteristic?.characteristic}/>
        <GallerySection imageArr={characteristic?.images}/>
        </>

}

export default MaterialAndTechnicalBasePage