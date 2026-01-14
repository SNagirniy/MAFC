import AccordionComponent from "../modules/Accordion/Accordion";
import PartnerHeader from "../elements/partnerHeader/PartnerHeader";
import EmptyState from "../modules/EmptyState/EmptyState";

const PartnersPage = ({partners_list})=> {
    if(!partners_list || partners_list?.length === 0) return <EmptyState/>;

const formatedPartnersList = partners_list?.map((el)=> {
    const logo = el?.documents?.find(item => !item?.name.includes('pdf'));  
    const content =el?.documents?.filter(el => el?.name.includes('pdf'));

  
    return {header:<PartnerHeader logo={logo} title={el?.topic}/>, 
    content:content}})



    return <AccordionComponent data={formatedPartnersList} title={'Наші партнери'}/>

}

export default PartnersPage;