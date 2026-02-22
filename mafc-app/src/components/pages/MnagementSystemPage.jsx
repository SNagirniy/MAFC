import StructureAndManagementSection from "../modules/StructureAndManagement/StructureAndManagementSection";
import OrganizationsStructure from "../modules/OrganizationsStructure/OrganizationsStructure";
import PageWrapper from "../layouts/PageWrapper";
import RteTextBox from "../elements/rteTextBox/RteTextBox";

const MnagementSystemPage = ({pageData})=> {

const {organization_structure,teachers, description, page_title } = pageData;


    return(
        <PageWrapper main_title={page_title}>
            <RteTextBox title={'Загальні засади управління'} markdown={description}/>
            <OrganizationsStructure title={'система управління'} structure_image_obj = {organization_structure}/>
            <StructureAndManagementSection personsDataArray={teachers} title={'адміністрація коледжу'}/>
        </PageWrapper>
    )
};

export default MnagementSystemPage;