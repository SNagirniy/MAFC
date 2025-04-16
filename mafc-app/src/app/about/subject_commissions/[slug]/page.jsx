import ComissionPage from "@/components/pages/CommisionPage";
import comissionsSlugObject from "@/utils/comission_slug_object";

export const revalidate = 3600;
export const dynamicParams = true;


  export async function generateStaticParams() {
    const commissionSlugs = Object.keys(comissionsSlugObject);

    const paths = commissionSlugs.map((slug) => ({
        params: { slug },
      }));

    return paths
  }

const Comission = async({params})=> {
    const { slug } = await params;
return <ComissionPage slug={slug}/>
};

export default Comission;