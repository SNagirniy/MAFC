import RteTextBox from "@/components/elements/rteTextBox/RteTextBox";
import { getCollegeHistoryPage } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import PageWrapper from "@/components/layouts/PageWrapper";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/college_history');

const CollegeHistory = async()=> {

    const pageData = await getCollegeHistoryPage();
   
    if(!pageData) return <EmptyState/>

return <PageWrapper main_title={pageData?.page_title}>
            <RteTextBox markdown={pageData?.markdown}/>
    </PageWrapper>

}

export default CollegeHistory;