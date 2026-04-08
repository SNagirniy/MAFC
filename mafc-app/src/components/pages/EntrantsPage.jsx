import EducationalProgramDetail from "../modules/EducationalPrograms/EducationalProgramDetail";
import AccordionComponent from "../modules/Accordion/Accordion";


const EntrantsPage = ({profession})=>{
    
    return (
        <>
        <EducationalProgramDetail profession={profession} />
        <AccordionComponent title={'Твій фах — твої можливості'} data={profession?.graduate_profile}/>
        </>
    )
};

export default EntrantsPage;