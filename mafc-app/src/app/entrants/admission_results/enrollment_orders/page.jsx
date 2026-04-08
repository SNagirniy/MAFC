import { redirect } from "next/navigation";
import { getIntroductoryQuidePageData } from "@/server/strapi/strapi";
import { notFound } from "next/navigation";

export const revalidate = 3600;


const EnrollmentOrder = async()=>{

    const rootPath='/entrants/admission_results/enrollment_orders';
    const pageData = await getIntroductoryQuidePageData();
    if(!pageData?.enrollment_order_lists[0] || pageData?.error ){notFound()};
    const slug = pageData?.enrollment_order_lists[0]?.slug;

    redirect(`${rootPath}/${slug}`)

}

export default EnrollmentOrder;