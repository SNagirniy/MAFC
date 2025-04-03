"use client"
import EducationalPrograms from "../modules/EducationalPrograms/EducationalPrograms";
import { useSearchParams } from "next/navigation";
import professions from "@/utils/professions";
import DocsListSection from "../modules/DocsListSection/DocsListSection";
import PollListSection from "../modules/PollListSection/PollListSection";
import { useState, useEffect, useTransition} from "react";


const EducationalProgramPage =()=> {
    const [monitoringDocx, setMonitoringDocx]=useState([]);
    const[isPending, startTransition]= useTransition();
    const searchParams = useSearchParams();
    const professionParam = searchParams.get('profession');

    const {profession_docs} = professions[professionParam];
    const {poll_list} = professions[professionParam];

    const fetchMonitoringDocx = async()=> {
            startTransition(async()=>{ 
              
                const res = await fetch(`/api/education_process/monitoring_opp`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const result = await res.json();
                startTransition(()=>setMonitoringDocx(result))})  
    };

    useEffect(() => {fetchMonitoringDocx()},[]);
    
    return (<>
    <EducationalPrograms professions={professions} currentProfession={professionParam}/>
    <DocsListSection title={'Матеріали освітньо-професійної програми'} docs_list={profession_docs}/>
    <DocsListSection 
    title={'Моніторинг, перегляд та реалізація ОПП'} 
    docs_list={monitoringDocx} 
    isPending={isPending}/>
    <PollListSection title={'Моніторинг освітніх потреб здобувачів освіти'} pollList={poll_list}/>
    </>)
};


export default EducationalProgramPage;