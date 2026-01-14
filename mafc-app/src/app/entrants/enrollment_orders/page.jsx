import EnrollmentOrdersPage from "@/components/pages/EnrollmentOrdersPage";
import { Suspense } from "react";
import Loader from "@/components/elements/loader/Loader";
import { getAllPdfFiles } from "@/server/google/drive";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/entrants/enrollment_orders?basic_education=9');


const EnrollmentOrders = async()=> {

    const res = await getAllPdfFiles('1eMSQdmmIiD0ZRXw6E6H_ZPObLqtL66iA');
    const data = await res.json();
  

return <Suspense fallback={<Loader/>}><EnrollmentOrdersPage data = {data?.subfolders}/></Suspense>
}

export default EnrollmentOrders;