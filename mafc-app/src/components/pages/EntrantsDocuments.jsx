
import DocsListSection from "../modules/DocsListSection/DocsListSection";


function extractYears(fileName) {
    const match = fileName.match(/\((\d{4})-(\d{4})\)/);
    if (match) {
      return [parseInt(match[1]), parseInt(match[2])]; // [початковий рік, кінцевий рік]
    }
    return [0, 0]; // Якщо немає збігу, сортувати в кінець
  }
  
  function sortFilesByAcademicYear(files) {
    return files.sort((a, b) => {
      const [startA, endA] = extractYears(a.name);
      const [startB, endB] = extractYears(b.name);
      return endB - endA || startB - startA; // Спочатку сортуємо за кінцевим роком, потім за початковим
    });
  }



const EntrantsDocuments = async({docxList})=>{


    const ordersList = docxList?.find(el => el.topic.toLowerCase() === 'накази');
    const desitionsList = docxList?.find(el => el.topic.toLowerCase() === 'рішення');
    const aboutList = docxList?.find(el => el.topic.toLowerCase() === 'комісія');
    

  

    return (
        <>
       
        <DocsListSection title={'Приймальна комісія'} docs_list={aboutList?.documents}/>
        <DocsListSection title={'Рішення приймальної комісії'} 
        docs_list={sortFilesByAcademicYear(desitionsList?.documents)}/>
        <DocsListSection title={'Накази приймальної комісії'} 
        docs_list={sortFilesByAcademicYear(ordersList?.documents)}/>
      
        </>
    )
}

export default EntrantsDocuments