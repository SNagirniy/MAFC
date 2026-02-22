import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import AccordionComponent from "@/components/modules/Accordion/Accordion";

export const revalidate = 3600;

const DirectorReport = async()=> {
    const folderId = '1eMgKK-RwxvoLz2NN9Z-r9_8t2StxfMK2'
    const docxList = await fetchAllDocxFromSubfolders(folderId)
  
      if(!docxList) {return <EmptyState/>}

      const docxToRender = [...(docxList ?? [])].sort((a,b)=> a?.description - b.description)

    return(
      <AccordionComponent
      title={'звіт директора про діяльність закладу освіти'}
        data={docxToRender}/>
    )
};


export default DirectorReport;