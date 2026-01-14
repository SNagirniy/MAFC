import {getIntroductoryQuidePageData} from "@/server/strapi/strapi";

import ProfesionsNavPanel from "@/components/elements/profesionsRadioPanel/ProfessionsNavPanel";


export const revalidate = 3600;


const  SpecialityRatingLayout = async({children}) =>{

const pageData = await getIntroductoryQuidePageData();

return <>
<ProfesionsNavPanel
professions={pageData?.professions}
rootPath={'/entrants/specialty_rating'}/>
{children}
</>
}


export default  SpecialityRatingLayout;