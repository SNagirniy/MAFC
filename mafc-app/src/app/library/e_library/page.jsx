import { getE_LibraryPage } from "@/server/strapi/strapi";
import E_LibraryPage from "@/components/pages/E_LibraryPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/library/e_library');


const E_Library = async()=> {
const libraryData = await getE_LibraryPage();

return <E_LibraryPage libraryData={libraryData}/>

};

export default E_Library;