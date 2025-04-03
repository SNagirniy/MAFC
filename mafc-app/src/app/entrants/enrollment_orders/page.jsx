import EnrollmentOrdersPage from "@/components/pages/EnrollmentOrdersPage";
import { Suspense } from "react";
import Loader from "@/components/elements/loader/Loader";


const EnrollmentOrders =()=> {
return <Suspense fallback={<Loader/>}><EnrollmentOrdersPage/></Suspense>
}

export default EnrollmentOrders;