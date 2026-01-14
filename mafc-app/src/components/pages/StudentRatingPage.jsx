import AccordionComponent from "../modules/Accordion/Accordion";
import EmptyState from "../modules/EmptyState/EmptyState";

const StudentRatingPage = ({folders})=> {
    if(!folders || folders?.lengnh === 0) return <EmptyState/>

 return <AccordionComponent data={folders} title={'рейтинги студентів'}/>
};

export default StudentRatingPage;