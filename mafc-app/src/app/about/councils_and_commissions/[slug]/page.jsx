import ComissionPage from "@/components/pages/CommisionPage";
import { getSubjectCommissionsList, getSubjectCommissionData, getNews } from "@/server/strapi/strapi";
import { fetchDocxFromCurrentFolder } from "@/server/google/drive";
import { notFound } from "next/navigation";
import { seoConfig } from "../../../../../seo.config";


const comissionGDFolderIdList ={
    agrarian: '1SdgimeLQSvbL5o0mSnX3Za0wJziAfkgJ',
    social: '1Zj84dajYRpZG7FZ7YFkxP_r69bwN0amF',
    general_educational: '1Ea3fUmqgMQXvc2MIpCO4dRc6LWcICxcR',
    economic: '1C9UW0Gl2DhVSm5D0L5jV18TbNm7wN7ML',
    technical: '1fFiRh_6YaskltpUlCImUnqNvUg4H5qap',
    zootechnical: '1TeQ_0ZGn3YbK0aV-s19BnM8DTzl-FFX8',
}

export const revalidate = 3600;
export const dynamicParams = true;


  export async function generateStaticParams() {
    const subjectCommissionsList = await getSubjectCommissionsList();

    const paths = subjectCommissionsList.map((item) => ({
      
        params: { slug: item?.category?.code},
      }));

    return paths
  };

  export async function generateMetadata({ params }) {
  const {slug} = await params;
  const data = await getSubjectCommissionData(slug);
  if(!data || data.length === 0) return {};

  const {siteUrl, defaultOgImage}= seoConfig;

  const {title} = data[0];
  const desc = `Інформація про ${title}, напрямки роботи, викладацький склад та освітню діяльність коледжу.`

  return {
    title: title,
    description: desc,
    alternates: { canonical: `${siteUrl}/about/councils_and_commissions/${slug}` },
    openGraph: {
      title: title,
      description: desc,
      url: `${siteUrl}/about/councils_and_commissions/${slug}`,
      type: 'website',
      images: [{ url: defaultOgImage, width: 1200, height: 630 }],
    },}
}

const Comission = async({params})=> {
    const {slug} = await params;
    const commissionData = await getSubjectCommissionData(slug);
    const news= await getNews(slug);
    const comissionDocx = await fetchDocxFromCurrentFolder(comissionGDFolderIdList[slug]);
     const docxList = await comissionDocx.json();

      if(!commissionData){notFound()}

return <ComissionPage docs_list={docxList} category={slug} news={news} commissionData={commissionData}/>
};

export default Comission;