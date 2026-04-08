import DepartmentSection from "@/components/modules/DepartmentSection/DepartmentSection";
import EmptyState from "@/components/modules/EmptyState/EmptyState";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";
import { getStudentSelfGovernmentPageData } from "@/server/strapi/strapi";
import StudentGovernmentSection from "@/components/modules/StudentGovernmentSection/StudentGovernmentSection";
import AllNews from "@/components/modules/allNews/AllNews";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/student_self_government');


const StudentSelfGovernment = async()=> {

    const pageData = await getStudentSelfGovernmentPageData();

    if(!pageData) return <EmptyState/>;

    const {page_title, markdown,google_drive_doc_folder_id, link} = pageData?.data;

    const docsList = await fetchAllDocxFromSubfolders(google_drive_doc_folder_id);
 

    return(
        <>
            <DepartmentSection 
                page_title={page_title}
                markdown={markdown}
                docList={docsList}
                link_item={link}/>
           {(pageData?.student_governments && pageData?.student_governments?.length > 0) && <StudentGovernmentSection stud_list={pageData?.student_governments} title={'НАША КОМАНДА'}/> }
            <section>
                <SectionWrapper title={'НАШІ РЕЗУЛЬТАТИ'}>
                     <AllNews news_list={pageData?.news}/>
                </SectionWrapper>
            </section>
           
        </>
    )

}

export default StudentSelfGovernment;