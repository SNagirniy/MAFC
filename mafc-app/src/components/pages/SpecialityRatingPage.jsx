'use client'
import SpecialityRatingSection from "../modules/SpecialityRatingSection/SpecialityRatingSection";
import SpecialityRatingList from "../modules/SpecialityRatingList/SpecialityRatingList";
import ratings from "@/utils/ratings";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";



const SpecialityRatingPage = ({data})=> {
    const [ratingsList, setRatingsList]= useState(data);
    const searchParams = useSearchParams();
    const [ratingsToRender, setRatingsToRender] = useState([]);

    const getItemsToRender = ()=> {
        const profession = searchParams.get('profession');
        const baseArray = ratingsList?.filter(el=> el?.folderName === profession);
        setRatingsToRender(baseArray[0].subfolders)

    }
    
            useEffect(()=>{getItemsToRender()}, [searchParams]);

    
    return <>
    <SpecialityRatingSection professions={ratings}>
        <SpecialityRatingList speciality_rating_list={ratingsToRender}/>
    </SpecialityRatingSection>

    
    
         </>
};


export default SpecialityRatingPage;