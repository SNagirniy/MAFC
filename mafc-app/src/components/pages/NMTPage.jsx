import NMTLIst from "../modules/NMTList/NMTlist";
import EmptyState from "../modules/EmptyState/EmptyState";

const NMTPage= ({nmtPageData})=>{
if(!nmtPageData || !nmtPageData?.nmt_link_lists || nmtPageData?.nmt_link_lists?.length === 0) {return <EmptyState/>}
  

return <>
{nmtPageData?.nmt_link_lists?.map((el)=> {
    return(<NMTLIst icon={el?.icon}  title={el?.header} linkList={el?.links}/>)
})}
</> 
};

export default NMTPage;