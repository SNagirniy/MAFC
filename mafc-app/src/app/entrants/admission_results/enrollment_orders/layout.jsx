import EnrollmentOrdersNavPanel from "@/components/elements/enrollmentOrdersNavPanel/EnrollmentOrdersNavPanel";
import { getIntroductoryQuidePageData } from "@/server/strapi/strapi";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
export const revalidate = 3600;

const EnrollmentOrdersLayout = async({children})=>{

const pageData = await getIntroductoryQuidePageData();
if(!pageData) return <EmptyState/>

const enrollmentOrdesList = pageData?.enrollment_order_lists;

    return <>
            <EnrollmentOrdersNavPanel
                enrolmentOrdersList={enrollmentOrdesList}
                title={'накази про зарахування'}
                rootPath={'/entrants/admission_results/enrollment_orders'}/>
            {children}
            </>

}

export default EnrollmentOrdersLayout;