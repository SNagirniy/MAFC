import CompaniesCardList from "../modules/CompaniesCardList/CompaniesCardList";
import AccordionComponent from "../modules/Accordion/Accordion";

const CarrerPage = ({pageData, docList})=> {

return (<>
        <CompaniesCardList pageData={pageData}/>
        <AccordionComponent data={docList} />
        </>)
}

export default CarrerPage;