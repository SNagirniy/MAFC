import StructureDepartmentLayout from "@/components/layouts/structureDepartmentLayout/StructureDepartmentLayuout";
import QualityAndContentOfEducationNavList from "@/utils/qualituAndContentOfEducationNavList";



const QualityAndContentOfEducationLayout = ({children})=> {


    return <StructureDepartmentLayout
    const rootPath = {'/activity_vectors/quality_and_content_of_education/'}
    page_title={'ЯКІСТЬ ТА ЗМІСТ ОСВІТИ'} 
    nav_list= {QualityAndContentOfEducationNavList}>
        {children}
    </StructureDepartmentLayout>
};

export default QualityAndContentOfEducationLayout;

