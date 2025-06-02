import PartnersPage from "@/components/pages/PartnersPage";
import { fetchAllDocxFromSubfolders } from "@/server/google/drive";

export const revalidate = 3600;

const Partners = async()=> {

     const folderId = '1O_Bd3S0m1Q4_pXz0c_c-pJf_WffHI8-R'
    const res = await fetchAllDocxFromSubfolders(folderId);
    const docxList = await res.json();

   

    return <PartnersPage partners_list={docxList}/>

};

export default Partners;