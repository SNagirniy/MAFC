import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";

const PedagogicalCouncilDecisionPage =({pcdList})=>{
    if(!pcdList || pcdList?.length === 0) return <EmptyState/>;

const sortedDocxInList = [...pcdList]?.map((el)=> {const sortedDocx = el?.documents?.sort((a,b)=> Number.parseInt(a?.name)  - Number.parseInt(b?.name));
    return {...el, documents: sortedDocx}
});

const sortedList = sortedDocxInList?.sort((a,b)=> Number.parseInt(a?.topic)  - Number.parseInt(b?.topic));

    return <AccordionComponent data={sortedList} title={'рішення педагогічної ради'}/>
};

export default PedagogicalCouncilDecisionPage;