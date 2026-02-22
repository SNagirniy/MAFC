import MultyContentModule from "../modules/MultyContentModule/MultyContentModule";


const MemoryPage =({pageData})=>{

    const {page_title, markdown, video} = pageData;

return <MultyContentModule page_title={page_title} markdown={markdown} media_array={video}/>

}

export default MemoryPage;