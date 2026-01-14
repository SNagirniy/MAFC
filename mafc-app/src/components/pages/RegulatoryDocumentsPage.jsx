import LicensesAndCertificatesSection from "../modules/LicensesAndCertificatesSection/LicensesAndCertificatesSection";
import AccordionComponent from "../modules/Accordion/Accordion";


const RegulatoryDocumentsPage = ({docxList, pageData})=> {

     const docxToRender = [...(docxList ?? [])].sort(
  (a, b) => a?.description - b?.description);

    return(
        <>
        <AccordionComponent title={'регламентуючі документи'} data={docxToRender}/>
        <LicensesAndCertificatesSection images={pageData?.license}/>
        </>
    )

}


export default RegulatoryDocumentsPage;