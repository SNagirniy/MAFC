
import SpecialityRatingSection from "../modules/SpecialityRatingSection/SpecialityRatingSection";
import SpecialityRatingList from "../modules/SpecialityRatingList/SpecialityRatingList";




const SpecialityRatingPage = ({speciality_rating_list})=> {
    return <>
    <SpecialityRatingSection >
        <SpecialityRatingList speciality_rating_list={speciality_rating_list}/>
    </SpecialityRatingSection>
         </>
};


export default SpecialityRatingPage;