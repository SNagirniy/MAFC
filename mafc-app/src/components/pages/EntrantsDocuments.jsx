
import DocsListSection from "../modules/DocsListSection/DocsListSection";
import EmptyState from "../modules/EmptyState/EmptyState";


function extractYears(fileName) {
    const match = fileName.match(/\((\d{4})-(\d{4})\)/);
    if (match) {
      return [parseInt(match[1]), parseInt(match[2])]; 
    }
    return [0, 0]; 
  }
  
  function sortFilesByAcademicYear(files) {
    return files.sort((a, b) => {
      const [startA, endA] = extractYears(a.name);
      const [startB, endB] = extractYears(b.name);
      return endB - endA || startB - startA; 
    });
  }



const EntrantsDocuments = async({docxList})=>{
  if(!docxList || docxList?.length === 0) {return <EmptyState/>}

  const docxToRender = [...(docxList ?? [])].sort(
  (a, b) => a?.description - b?.description);


    return (
        <>
        {docxToRender?.map((el)=>{return (<DocsListSection title={el?.topic} docs_list={sortFilesByAcademicYear(el?.documents)}/>) })}
        </>
    )
}

export default EntrantsDocuments