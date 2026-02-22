import StructureDepartmentLayout from "@/components/layouts/structureDepartmentLayout/StructureDepartmentLayuout";
import TransparencyAndInformationOpennessNavList from "@/utils/TransparencyAndInformationOpennessNavList";



const TransparencyAndInformationOpenness = ({children})=> {


    return <StructureDepartmentLayout 
    rootPath = {'/about/transparency_and_information_openness/'} 
    page_title={'ПРОЗОРІСТЬ ТА ІНФОРМАЦІЙНА ВІДКРИТІСТЬ'} 
    nav_list= {TransparencyAndInformationOpennessNavList}>
        {children}
    </StructureDepartmentLayout>
};

export default TransparencyAndInformationOpenness;
