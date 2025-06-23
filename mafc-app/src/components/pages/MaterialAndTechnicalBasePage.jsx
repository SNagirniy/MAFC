import AccordionComponent from "../modules/Accordion/Accordion";
import GallerySection from "../modules/GallerySection/GallerySection";

const MaterialAndTechnicalBasePage = ({docxList})=> {

        const PDFDocuments = docxList?.filter(el => el?.topic === 'матеріально-технічне забезпечення закладу освіти');
        const images = docxList?.flatMap((el)=> {if(el?.topic !== "матеріально-технічне забезпечення закладу освіти"){return el?.documents};  });


return <>
        <AccordionComponent data={PDFDocuments} title={'матеріально-технічна база'}/>
        <GallerySection imageArr={images}/>
        </>

}

export default MaterialAndTechnicalBasePage