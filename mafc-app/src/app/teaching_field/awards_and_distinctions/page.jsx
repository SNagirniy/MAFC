import ModalImageGallery from "@/components/modules/ModalImageGallery/ModalImageGallery";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { getAwardsAndDistinctionsPage } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/teaching_field/awards_and_distinctions');

const AwardsAndDistinctions = async ()=> {

    const pageData = await getAwardsAndDistinctionsPage();
    if(!pageData) return <EmptyState/>

    const {page_title, images} = pageData;

    return <ModalImageGallery imagesList={images} title={page_title}/>

}

export default AwardsAndDistinctions;