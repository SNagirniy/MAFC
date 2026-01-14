import SubjectCommissionsMembers from "../modules/SubjectCommissionsMembers/SubjectCommissionsMembers";
import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";



const CouncilsAndCommissionsPage = ({subjectCommissionsList, councils_and_commissions_data})=> {

   if(!subjectCommissionsList && !councils_and_commissions_data || councils_and_commissions_data?.length === 0) return <EmptyState/>;
return(
   <>
   <AccordionComponent 
      title={'ради і комісії'}
      data={councils_and_commissions_data}/>
   <SubjectCommissionsMembers 
      subjectCommissionsList={subjectCommissionsList}/>
   </>
   
)
}

export default CouncilsAndCommissionsPage;