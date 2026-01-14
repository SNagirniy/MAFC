import { redirect } from "next/navigation";
import { getIntroductoryQuidePageData } from "@/server/strapi/strapi";
import { notFound } from "next/navigation";

export const revalidate = 3600;

const EduPrograms = async()=> {
    const  rootPath='/educational_process/educational_programs'
    const pageData = await getIntroductoryQuidePageData();
    if(!pageData?.professions[0] || pageData?.error ){notFound()}

    const slug = pageData?.professions[0]?.slug;

    redirect(`${rootPath}/${slug}`)

};

export default EduPrograms;