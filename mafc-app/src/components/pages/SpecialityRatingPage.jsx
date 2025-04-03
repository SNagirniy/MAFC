'use client'
import SpecialityRatingSection from "../modules/SpecialityRatingSection/SpecialityRatingSection";
import SpecialityRatingList from "../modules/SpecialityRatingList/SpecialityRatingList";
import ratings from "@/utils/ratings";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";



const SpecialityRatingPage = ()=> {
    const [ratingsList, setRatingsList]= useState([]);
    const[isPending, startTransition]= useTransition();
    const searchParams = useSearchParams();


    const fetchRatings = async () => {
        startTransition(async()=>{ 
            const query = new URLSearchParams({ profession: searchParams.get('profession') }).toString();
        
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/entrants/ratings?${query}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const result = await res.json();
            startTransition(()=>setRatingsList(result))
            
        })
       
    };

    useEffect(()=>{fetchRatings()},[searchParams])

    
    return <>
    <SpecialityRatingSection professions={ratings}>
        <SpecialityRatingList isPending={isPending} speciality_rating_list={ratingsList}/>
    </SpecialityRatingSection>

    
    
         </>
};


export default SpecialityRatingPage;