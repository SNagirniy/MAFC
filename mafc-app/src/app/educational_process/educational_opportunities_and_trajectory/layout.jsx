import StructureDepartmentLayout from "@/components/layouts/structureDepartmentLayout/StructureDepartmentLayuout";
import educationalOpportunitiesAndTrajectoryNavList from "@/utils/educationalOpportunitiesAndTrajectoryNavList";



const EducationalOpportunitiesAndTrajectoryLayout = ({children})=> {


    return <StructureDepartmentLayout
    const rootPath = {'/educational_process/educational_opportunities_and_trajectory/'}
    page_title={'ОСВІТНІ МОЖЛИВОСТІ ТА ТРАЄКТОРІЯ'} 
    nav_list= {educationalOpportunitiesAndTrajectoryNavList}>
        {children}
    </StructureDepartmentLayout>
};

export default EducationalOpportunitiesAndTrajectoryLayout;

