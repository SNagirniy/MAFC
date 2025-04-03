import CollegeReportingPage from "@/components/pages/CollegeReportingPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;


const CollegeReporting = async() => {
    const folderId = '1PEOA_nZ1cidPn6-64jFecv2gBl2w1Kuy'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

    return(
      <CollegeReportingPage docxList={docxList}/>
    )
};


export default CollegeReporting;