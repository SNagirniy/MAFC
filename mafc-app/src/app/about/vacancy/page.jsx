import VacancyPage from "@/components/pages/VacancyPage";
import { getVacancyPage } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/vacancy')


const Vacancy= async()=> {

    const vacanciesPage = await getVacancyPage();

    return <VacancyPage page_title={vacanciesPage?.page_title} companies={vacanciesPage?.companies}/>

};

export default Vacancy