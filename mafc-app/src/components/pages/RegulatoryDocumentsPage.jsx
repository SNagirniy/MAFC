import LicensesAndCertificatesSection from "../modules/LicensesAndCertificatesSection/LicensesAndCertificatesSection";
import AccordionComponent from "../modules/Accordion/Accordion";
import PageWrapper from "../layouts/PageWrapper";
import { v4 } from "uuid";


const RegulatoryDocumentsPage = ({foldersList,page_title,license,document_link_list})=> {

    const regulatoryAndLegalActs = {id:v4(),topic: 'Зовнішні нормативно-правові акти',documents: (document_link_list?? [])};
   

     const sortedFolders = [...(foldersList ?? [])].sort(
  (a, b) => a?.description - b?.description);

  const docxToRender= [regulatoryAndLegalActs, ...sortedFolders]

    return(
        <PageWrapper main_title={page_title}>
        <AccordionComponent 
        data={docxToRender}/>
        <LicensesAndCertificatesSection 
        images={license}/>
        
        </PageWrapper>
    )

}


export default RegulatoryDocumentsPage;