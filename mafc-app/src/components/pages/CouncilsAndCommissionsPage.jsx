import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";
import PageWrapper from "../layouts/PageWrapper";



const CouncilsAndCommissionsPage = ({councils_and_commissions_data})=> {

   if(!councils_and_commissions_data || councils_and_commissions_data?.length === 0) return <EmptyState/>;

   const docxToRender = [...(councils_and_commissions_data ?? [])].sort(
  (a, b) => a?.description - b?.description);
return(
   <PageWrapper main_title={'ради і комісії'}>
   <AccordionComponent 
      data={docxToRender}/>
   </PageWrapper>
   
)
}

export default CouncilsAndCommissionsPage;