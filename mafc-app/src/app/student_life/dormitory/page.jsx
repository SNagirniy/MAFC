import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
import { getDomitoryPageData } from "@/server/strapi/strapi";
import DormitoryPage from "@/components/pages/DormitoryPage";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/student_life/dormitory')

const Dormitory = async ()=> {
    const folderId ='1sa6ocuTRCrQr7s8idgUbBs0r8HdLYzPb';
    const res = await fetchDocxFromCurrentFolder(folderId);
    const docx = await res.json();

    const pageData = await getDomitoryPageData()


return <DormitoryPage docx={docx} pageData={pageData}/>
};

export default Dormitory