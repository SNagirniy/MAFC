import BankAccountPage from "@/components/pages/BankAccountPage";
import { getBankAccountPage } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/about/transparency_and_information_openness/bank_details');

const BankDetails = async()=>{

const pageData = await getBankAccountPage();

if(!pageData) return <EmptyState/>

    return <BankAccountPage pageData={pageData}/>

}

export default BankDetails;