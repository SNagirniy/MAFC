import DocsListSection from "../modules/DocsListSection/DocsListSection";
import PollListSection from "../modules/PollListSection/PollListSection";
import EducationalProgramDetail from "../modules/EducationalPrograms/EducationalProgramDetail";

const EducationalProgramPage =({profession,professionDocx, generalDocx, commonPool})=> {

    const poll_list = [
  ...(profession?.pool ?? []),
  ...(commonPool ?? [])
];

    return (<>
    <EducationalProgramDetail profession={profession}/>
    <DocsListSection 
    title={'Матеріали освітньо-професійної програми'} docs_list={professionDocx}/>
     <DocsListSection 
    title={'Моніторинг, перегляд та реалізація ОПП'} 
    docs_list={generalDocx}/>
    <PollListSection title={'Моніторинг освітніх потреб здобувачів освіти'} pollList={poll_list}/>
   
    </>)
};


export default EducationalProgramPage;
