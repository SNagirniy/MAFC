import { getLibraryPage } from "@/server/strapi/strapi";
import LibraryPage from "@/components/pages/LibraryPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/library/about');

const Library = async()=> {

    const res = await getLibraryPage();
  
return <LibraryPage libraryData={res}/>
}

export default Library;