
import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";

const RulesOfConductPage = ({docList})=> {
    if(!docList || docList?.length === 0) return <EmptyState/>;

    return <AccordionComponent
    title={'Правила поведінки'}
    data={docList}
    />
};

export default RulesOfConductPage;