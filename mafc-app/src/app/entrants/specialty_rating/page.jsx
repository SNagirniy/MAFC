import SpecialityRatingPage from "@/components/pages/SpecialityRatingPage";
import { Suspense } from "react";
import Loader from "@/components/elements/loader/Loader";


const SpecialityRating = async()=> {

    
    return <Suspense fallback={<Loader/>}><SpecialityRatingPage/></Suspense> 
}


export default SpecialityRating;