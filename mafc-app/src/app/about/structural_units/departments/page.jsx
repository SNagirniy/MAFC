import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import { getDepartment } from "@/server/strapi/strapi";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

const DepartmentPage = async()=> {

    const pageRoute = '/api/department-page';
    const pageData = await getDepartment(pageRoute);
  

    if(!pageData) return <EmptyState/>;


  const docxResults = await Promise.all(
  pageData.data.map(async ({ google_drive_doc_folder_id, id }) => {
    const docxList = await fetchAllDocxFromSubfolders(
      google_drive_doc_folder_id
    );

    return {
      id,
      docxList,
    };
  })
);

const docsMap = new Map(
  docxResults.map(item => [item.id, item.docxList])
);

const pageDataWithDocs = pageData.data.map(el => ({
  ...el,
  docList: docsMap.get(el.id) ?? [],
}));


return <>
        {pageDataWithDocs?.map((el)=> {
            const {page_title, markdown, docList, link,id} = el
          
                return <DepartmentSection key={id}  link_item={link} page_title={page_title} markdown={markdown} docList={docList}/>
        })}

        </>
}

export default DepartmentPage;