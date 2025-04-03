import EducationalProgramPage from "@/components/pages/EducationalProgramPage";
import { Suspense } from "react";
import Loader from "@/components/elements/loader/Loader";

const EducationalAndProfesionalPrograms= ({})=>{
   
return <Suspense fallback={<Loader/>}><EducationalProgramPage /></Suspense>
}


export default EducationalAndProfesionalPrograms;