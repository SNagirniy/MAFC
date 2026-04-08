import StructureDepartmentLayout from "@/components/layouts/structureDepartmentLayout/StructureDepartmentLayuout";
import AdmissionResultsNavList from "@/utils/admissionResultsNavList";



const AdmissionResultsLayout = ({children})=> {


    return <StructureDepartmentLayout
    const rootPath = {'/entrants/admission_results/'}
    page_title={'результати вступу'} 
    nav_list= {AdmissionResultsNavList}>
        {children}
    </StructureDepartmentLayout>
};

export default AdmissionResultsLayout;



