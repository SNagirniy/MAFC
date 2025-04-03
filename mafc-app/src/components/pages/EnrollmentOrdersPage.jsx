
import EnrollmentOrdersSection from "../modules/EnrollmentOrdersSection/EnrollmentOrdersSection";
import EnrollmentOrdersList from "../elements/enrollmentOrdersList/EnrollmentOrdersList";
import { Suspense } from "react";
import SectionLoader from "../elements/SectionLoader/SectionLoader";





const EnrollmentOrdersPage =()=> {
    
    return <>
            <EnrollmentOrdersSection>
                <Suspense fallback={<SectionLoader/>}>
                    <EnrollmentOrdersList/>
                </Suspense>
                
            </EnrollmentOrdersSection>
         </>
};


export default EnrollmentOrdersPage;