import { getLibraryPage } from "@/server/strapi/strapi";
import LibraryPage from "@/components/pages/LibraryPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/library/about');

const Library = async()=> {

 const pageData = await getLibraryPage();
   
if(!pageData) return <EmptyState/>


return <><LibraryPage libraryData={pageData}/></>
}

export default Library;