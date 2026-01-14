import {getIntroductoryQuidePageData} from "@/server/strapi/strapi";
import ProfesionsNavPanel from "@/components/elements/profesionsRadioPanel/ProfessionsNavPanel";

export const revalidate = 3600;


const EducationalAndProfesionalProgramsLayout = async({children}) =>{

const pageData = await getIntroductoryQuidePageData();

return <>
<ProfesionsNavPanel
professions={pageData?.professions}
rootPath={'/educational_process/educational_programs'}/>
{children}
</>
}


export default EducationalAndProfesionalProgramsLayout;