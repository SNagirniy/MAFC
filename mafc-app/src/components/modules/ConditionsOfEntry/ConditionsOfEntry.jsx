import AccordionComponent from "../Accordion/Accordion";
import DocsListSection from "../DocsListSection/DocsListSection";

const ConditionsOfEntry = ({pageDocxData})=> {

    const sortedPageDocxData = [...(pageDocxData ?? [])].sort(
  (a, b) => a?.description - b?.description);

        return(
            <>
        {(pageDocxData && pageDocxData?.length > 0) && sortedPageDocxData?.map(({folderName, documents, subfolders,folderId})=>{
            const ComponentToRender = documents?.length > 0 ? DocsListSection : AccordionComponent;

            return <ComponentToRender
                    key={folderId}
                    folderId={folderId}
                    title={folderName}
                    docs_list={documents}
                    data={subfolders}/>
        })};
        </>)
};

export default ConditionsOfEntry;
