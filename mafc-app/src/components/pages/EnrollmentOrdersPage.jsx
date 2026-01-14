
import EnrollmentOrdersSection from "../modules/EnrollmentOrdersSection/EnrollmentOrdersSection";
import EnrollmentOrdersList from "../elements/enrollmentOrdersList/EnrollmentOrdersList";

const EnrollmentOrdersPage =({data})=> {
 
    return <>
            <EnrollmentOrdersSection>
                    <EnrollmentOrdersList data={data}/>
            </EnrollmentOrdersSection>
         </>
};


export default EnrollmentOrdersPage;