import BankAccountPage from "@/components/pages/BankAccountPage";
import { getBankAccountPage } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;

export const metadata = generateStaticPageMeta('/about/bank_account')

const Bank_account = async()=> {
    const pageData = await getBankAccountPage();

   return <BankAccountPage pageData={pageData}/>
}

export default Bank_account;