import MemoryPage from "@/components/pages/MemoryPage";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { getMemoryPage } from "@/server/strapi/strapi";

const Memory = async()=> {
const pageData = await getMemoryPage();

if(!pageData) return <EmptyState/>

return <MemoryPage pageData={pageData}/>

};

export default Memory;