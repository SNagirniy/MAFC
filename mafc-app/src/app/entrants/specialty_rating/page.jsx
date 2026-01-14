import { redirect } from "next/navigation";
import { getIntroductoryQuidePageData } from "@/server/strapi/strapi";
import { notFound } from "next/navigation";

export const revalidate = 3600;

const SpecRating = async()=> {
    const  rootPath='/entrants/specialty_rating';
    const pageData = await getIntroductoryQuidePageData();
    if(!pageData?.professions[0] || pageData?.error ){notFound()}

    const slug = pageData?.professions[0]?.slug;

    redirect(`${rootPath}/${slug}`)

};

export default SpecRating;