import AccordionComponent from "../modules/Accordion/Accordion";
import PageWrapper from "../layouts/PageWrapper";



const CouncilsAndCommissionsPage = ({page_title,allCommission, pedagogical_council})=> {

return(
   <PageWrapper main_title={page_title}>

    {pedagogical_council?.docx?.length > 0 && <AccordionComponent 
      data={pedagogical_council?.docx}
      title={pedagogical_council?.pedagogical_council_folder_id?.title}/>}

  {allCommission?.docx?.length > 0 &&  <AccordionComponent 
      data={allCommission?.docx}
      title={allCommission?.all_commission_folder_id?.title}/>}
   </PageWrapper>
   
)
}

export default CouncilsAndCommissionsPage;