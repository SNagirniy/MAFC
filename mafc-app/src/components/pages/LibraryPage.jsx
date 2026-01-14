import LibraryDashboardSection from "../modules/LibraryDashboardSection/LibraryDashboardSection";
import AccordionComponent from "../modules/Accordion/Accordion";
import GallerySection from "../modules/GallerySection/GallerySection";
import EmptyState from "../modules/EmptyState/EmptyState";



const LibraryPage =({libraryData})=> {
if(!libraryData) return <EmptyState/>;

return (
    <>
    <LibraryDashboardSection 
        page_title={libraryData?.page_title}
        dashboardData={libraryData?.dashboard}
        work_shedule_data={libraryData?.work_schedule}/>

    <AccordionComponent 
    data={libraryData?.rules} 
    title={'користувачам'}/> 
    
    <AccordionComponent 
    data={libraryData?.services} 
    title={'послуги'}/>    

   <GallerySection imageArr={libraryData?.images}/>
    </>   
)

}


export default LibraryPage;