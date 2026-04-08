import PageWrapper from "@/components/layouts/PageWrapper";
import RteTextBox from "@/components/elements/rteTextBox/RteTextBox";
import { getCModernWarMuseumPage } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/about/modern_war_museum');

const ModernWarMuseum = async()=> {

const pageData = await getCModernWarMuseumPage();

if(!pageData) return <EmptyState/>;

const {page_title, markdown} = pageData;

    return <PageWrapper main_title={page_title}>
                <RteTextBox markdown={markdown}/>
        </PageWrapper>
};

export default ModernWarMuseum;