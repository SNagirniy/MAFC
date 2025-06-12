import AccordionComponent from "../modules/Accordion/Accordion";


const PracticalClassesPage = ({doc_list,practicalProgramsList })=> {

    return <>
            <AccordionComponent data={doc_list} title={'Практичне навчання'}/>
            <AccordionComponent data={practicalProgramsList} title={'навчальні програми практик'}/>
            </>

}

export default PracticalClassesPage;