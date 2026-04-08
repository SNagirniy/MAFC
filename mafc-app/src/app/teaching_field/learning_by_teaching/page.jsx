import EmptyState from "@/components/modules/EmptyState/EmptyState";
import AccordionComponent from "@/components/modules/Accordion/Accordion";
import { getLearningByTeachingPage } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/teaching_field/learning_by_teaching');

const LearningByTeaching = async()=>{

    const pageData = await getLearningByTeachingPage();
    if(!pageData) return <EmptyState/>

    const {page_title, subtitle, note} = pageData;

  

    return <AccordionComponent 
        title={page_title}
        subtitle={subtitle}
        data={note}/>
}

export default LearningByTeaching;