import {getIntroductoryQuidePageData} from "@/server/strapi/strapi";

import ProfesionsNavPanel from "@/components/elements/profesionsRadioPanel/ProfessionsNavPanel";
import EmptyState from "@/components/modules/EmptyState/EmptyState";


export const revalidate = 3600;


const  SpecialityRatingLayout = async({children}) =>{

const pageData = await getIntroductoryQuidePageData();
if(!pageData) return <EmptyState/>

return <>
<ProfesionsNavPanel
title={'рейтинг за спеціальностями'}
professions={pageData?.professions}
rootPath={'/entrants/admission_results/specialty_rating'}/>
{children}
</>
}


export default  SpecialityRatingLayout;