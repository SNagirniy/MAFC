import DistanceLearningDescription from "../modules/DistanceLearningDescription/DistanceLearningSecription";
import DistanceLearningVideoSection from "../modules/DistanceLearningVideoSection/DistanceLearningVideoSection";
import EmptyState from "../modules/EmptyState/EmptyState";


const DistanceLearningPage = ({pageData})=>{
if(!pageData) return <EmptyState/>;

const {form_link, edu_platform, video_section} = pageData;

return (
    <>
    <DistanceLearningDescription form_link={form_link} edu_platform={edu_platform}/>
    <DistanceLearningVideoSection video_section={video_section} title={'Google Workspace for Education — просто про складне'}/>
    </>
    

)
};

export default DistanceLearningPage;