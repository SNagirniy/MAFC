import DocsListSection from "../modules/DocsListSection/DocsListSection";
import PollListSection from "../modules/PollListSection/PollListSection";
import EducationalProgramDetail from "../modules/EducationalPrograms/EducationalProgramDetail";
import AccordionComponent from "../modules/Accordion/Accordion";

const EducationalProgramPage =({profession,professionDocx, generalDocx, commonPool})=> {

    const poll_list = [
  ...(profession?.pool ?? []),
  ...(commonPool ?? [])
];

const professionDocxTorender =  [...(professionDocx || [])].sort((a,b)=> a?.description - b?.description);


    return (<>
    <EducationalProgramDetail profession={profession}/>
    <AccordionComponent data={professionDocxTorender}/>
     <DocsListSection 
    title={'Моніторинг, перегляд та реалізація ОПП'} 
    docs_list={generalDocx}/>
    <PollListSection title={'Моніторинг освітніх потреб здобувачів освіти'} pollList={poll_list}/>
   
    </>)
};


export default EducationalProgramPage;
