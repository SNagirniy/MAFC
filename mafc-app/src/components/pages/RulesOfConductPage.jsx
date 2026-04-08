
import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";

const RulesOfConductPage = ({docList, page_title})=> {
    if(!docList || docList?.length === 0) return <EmptyState/>;

    return <AccordionComponent
    title={page_title}
    data={docList}
    />
};

export default RulesOfConductPage;