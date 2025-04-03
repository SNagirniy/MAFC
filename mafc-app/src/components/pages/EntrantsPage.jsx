'use client'
import EducationalPrograms from "../modules/EducationalPrograms/EducationalPrograms";
import EntrantsGeneralInfo from "../modules/EntrantsGeneralInfo/EntrantsGeneralInfo";
import AdmisionRules from "../modules/AdmissionRules/AdmisionRules";
import EntranceTestProgram from "../modules/EntranceTestProgram/EntranceTestProgram";
import LivingAndStudyConditions from "../modules/LivingAndStudyConditions/LivingAndStudyConditions";
import { useSearchParams } from "next/navigation";
import professions from "@/utils/professions";



const EntrantsPage = ()=>{
    const searchParams = useSearchParams();
    const professionParam = searchParams.get('profession');

    return (
        <>
        <EducationalPrograms professions={professions} currentProfession={professionParam}/>
        <EntrantsGeneralInfo/>
        <EntranceTestProgram/>
        <AdmisionRules/>
        <LivingAndStudyConditions/>
        </>
    )
};

export default EntrantsPage;