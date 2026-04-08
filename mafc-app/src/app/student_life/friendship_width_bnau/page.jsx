import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getVolunteeringPageData } from "@/server/strapi/strapi";
import AllNews from "@/components/modules/allNews/AllNews";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/friendship_width_bnau');

const FriendshipWidthBnau = async()=> {

    const route ='/api/friendship-width-bnau';

    const pageData = await getVolunteeringPageData(route);

    if(!pageData) return <EmptyState/>;

    const {page_title, markdown,google_drive_doc_folder_id, link} = pageData?.data;

    const docsList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);
 

    return(
        <>
            <DepartmentSection 
                page_title={page_title}
                markdown={markdown}
                docList={docsList}
                link_item={link}/>
            <section>
                <SectionWrapper title={'Навчаємось разом — зростаємо разом'}>
                     <AllNews news_list={pageData?.news}/>
                </SectionWrapper>
            </section>
           
        </>
    )

}

export default FriendshipWidthBnau;