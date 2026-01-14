import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";


const PracticalClassesPage = ({doc_list,practicalProgramsList })=> {
    if(!doc_list && !practicalProgramsList) return <EmptyState/>;

    return <>
            <AccordionComponent data={doc_list} title={'Практичне навчання'}/>
            <AccordionComponent data={practicalProgramsList} title={'навчальні програми практик'}/>
            </>

}

export default PracticalClassesPage;