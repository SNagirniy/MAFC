import {getIntroductoryQuidePageData} from "@/server/strapi/strapi";
import { getAllPdfFiles } from "@/server/google/drive";
import ProfesionsNavPanel from "@/components/elements/profesionsRadioPanel/ProfessionsNavPanel";
import ConditionsOfEntry from "@/components/modules/ConditionsOfEntry/ConditionsOfEntry";
import EntrantsGeneralInfo from "@/components/modules/EntrantsGeneralInfo/EntrantsGeneralInfo";

export const revalidate = 3600;


const EducationalAndProfesionalProgramsLayout = async({children}) =>{

const pageData = await getIntroductoryQuidePageData();

const folderId ='1jKk_aONFD14-e8pW_4DkreqKFa5s_7Ec';
    const res = await getAllPdfFiles(folderId);
    const pageDocxData = await res.json();

return <>
<ProfesionsNavPanel
professions={pageData?.professions}
rootPath={'/entrants/areas_of_educational_activity'}/>
{children}
<EntrantsGeneralInfo entranceDocList={pageData?.entrance_documents_list}/>
<ConditionsOfEntry pageDocxData={pageDocxData?.subfolders}/>
</>
}


export default EducationalAndProfesionalProgramsLayout;