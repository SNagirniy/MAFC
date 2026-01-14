import AccordionComponent from "../modules/Accordion/Accordion";
import CollegeContacts from "../modules/CollegeContacts/CollegeContacts";
import EmptyState from "../modules/EmptyState/EmptyState";



const AntiCorruptionPage = ({activity_data, pageData})=> {

    if(!activity_data && !pageData) {return <EmptyState/>}

    return <>
                {activity_data && <AccordionComponent data={activity_data} title={'Антикорупційна діяльність'}/>}
               {pageData && <CollegeContacts 
                contactsData={pageData} 
                isSocialShow={false}/>}
            </>

}

export default AntiCorruptionPage;