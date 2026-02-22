import StructureDepartmentLayout from "@/components/layouts/structureDepartmentLayout/StructureDepartmentLayuout";
import StructureDepartmentNavList from "@/utils/structureDepartmentNavlist";



const StructuralUnits = ({children})=> {


    return <StructureDepartmentLayout
    const rootPath = {'/about/structural_units/'}
    page_title={'Структурні підрозділи'} 
    nav_list= {StructureDepartmentNavList}>
        {children}
    </StructureDepartmentLayout>
};

export default StructuralUnits;