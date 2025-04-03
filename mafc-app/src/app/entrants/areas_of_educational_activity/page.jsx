import EntrantsPage from "@/components/pages/EntrantsPage";
import { Suspense } from "react";
import Loader from "@/components/elements/loader/Loader";

const AreasOfEducationalActivity = ()=> {

    return <Suspense fallback={<Loader/>}><EntrantsPage/></Suspense>
}


export default AreasOfEducationalActivity;