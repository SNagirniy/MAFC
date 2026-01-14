import DiscussionPage from "@/components/pages/DiscussionPage";
import {fetchDocxFromCurrentFolder } from "@/server/google/drive";

export const revalidate = 3600;

const Discussion = async ()=>{
    const folderId = '11fgj3xm-l0KvtdG2t3pOROzh-VSSM0bj';
    const res = await fetchDocxFromCurrentFolder(folderId);
    const docxList = await res.json();

 return <DiscussionPage docx_list={docxList}/>
      
};

export default Discussion;

