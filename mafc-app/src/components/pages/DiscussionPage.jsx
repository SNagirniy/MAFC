import DocsListSection from "../modules/DocsListSection/DocsListSection"
import EmptyState from "../modules/EmptyState/EmptyState";

const DiscussionPage = ({docx_list})=>{
if(!docx_list || docx_list?.length === 0) return <EmptyState/>;

    return <DocsListSection 
            title={'на обговоренні'}
            docs_list={docx_list}/>

}

export default DiscussionPage;