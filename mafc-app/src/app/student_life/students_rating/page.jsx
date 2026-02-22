import { fetchAllDocxFromSubfolders } from "@/server/google/drive"
import StudentRatingPage from "@/components/pages/StudentRatingPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/students_rating');

const StudentRating = async()=> {

    const folderID = '1eJnqxRPMQ5v0H4gZ6iTHhr2uaKKX-Ey7';
    const folders = await fetchAllDocxFromSubfolders(folderID);


return <StudentRatingPage folders = {folders}/>
};


export default StudentRating;