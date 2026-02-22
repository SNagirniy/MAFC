import BankAccountPage from "@/components/pages/BankAccountPage";
import { getBankAccountPage } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";

export const revalidate = 3600;

const BankDetails = async()=>{

const pageData = await getBankAccountPage();

if(!pageData) return <EmptyState/>

    return <BankAccountPage pageData={pageData}/>

}

export default BankDetails;