import VacancyPage from "@/components/pages/VacancyPage";
import { getVacancyPage } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/vacancy')


const Vacancy= async()=> {

    const vacanciesPage = await getVacancyPage();
    if(!vacanciesPage) return <EmptyState/>

    return <VacancyPage page_title={vacanciesPage?.page_title} companies={vacanciesPage?.companies}/>

};

export default Vacancy