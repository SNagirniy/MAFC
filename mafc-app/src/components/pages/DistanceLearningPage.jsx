import DistanceLearningDescription from "../modules/DistanceLearningDescription/DistanceLearningSecription";
import DistanceLearningVideoSection from "../modules/DistanceLearningVideoSection/DistanceLearningVideoSection";



const DistanceLearningPage = ({pageData})=>{


const {form_link, edu_platform, video_section, administrator} = pageData;

return (
    <>
    <DistanceLearningDescription persons_data_arr={administrator} form_link={form_link} edu_platform={edu_platform}/>
    <DistanceLearningVideoSection video_section={video_section} title={'Google Workspace for Education — просто про складне'}/>
    </>
    

)
};

export default DistanceLearningPage;