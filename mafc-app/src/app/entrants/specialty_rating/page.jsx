import SpecialityRatingPage from "@/components/pages/SpecialityRatingPage";
import { Suspense } from "react";
import Loader from "@/components/elements/loader/Loader";
import { getAllPdfFiles } from "@/server/google/drive";

export const revalidate = 3600;

const SpecialityRating = async()=> {
    const res = await getAllPdfFiles('1oDP_3lxIk9h6kwTVSHXjBsV8w7zeN5Cm');
    const data = await res.json();

    
    return <Suspense fallback={<Loader/>}><SpecialityRatingPage data={data?.subfolders}/></Suspense> 
}


export default SpecialityRating;