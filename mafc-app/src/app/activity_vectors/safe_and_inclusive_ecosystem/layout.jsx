import StructureDepartmentLayout from "@/components/layouts/structureDepartmentLayout/StructureDepartmentLayuout";
import SafeAndInclusiveEcosystemNavList from "@/utils/safeAndInclusiveEcosystemNavList";



const SafeAndInclusiveEcosystemLayout = ({children})=> {


    return <StructureDepartmentLayout
    const rootPath = {'/activity_vectors/safe_and_inclusive_ecosystem/'}
    page_title={'СТВОРЕННЯ БЕЗПЕЧНОЇ ТА ІНКЛЮЗИВНОЇ ЕКОСИСТЕМИ'} 
    nav_list= {SafeAndInclusiveEcosystemNavList}>
        {children}
    </StructureDepartmentLayout>
};

export default SafeAndInclusiveEcosystemLayout;

