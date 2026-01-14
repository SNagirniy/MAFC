const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

import { getAllNews, getSubjectCommissionsList, getExtracurricularPageData, getIntroductoryQuidePageData } from "@/server/strapi/strapi";

export default async function sitemap() {

 const staticPages=['','/about/regulatory_documents','/about/councils_and_commissions','/about/subject_commissions', '/about/anti_corruption_activities','/about/partners', '/about/contacts', '/about/bank_account','/about/vacancy','/educational_process/material_and_technical_base','/educational_process/monitoring_the_quality_of_education','/educational_process/practical_classes','/educational_process/distance_learning', '/educational_process/academic_mobility','/educational_process/academic_integrity','/educational_process/nmt','/entrants/documents','/entrants/calendar', '/entrants/admission_results', '/entrants/enrollment_orders', '/student_life/schedules','/student_life/rules_of_conduct', '/student_life/your_safety', '/student_life/students_rating', '/student_life/extracurricular_activities', '/student_life/dormitory', '/student_life/career',  '/library/about', '/library/e_library',  '/documents_and_reporting/director_report', '/documents_and_reporting/college_reporting', '/documents_and_reporting/pedagogical_council_decision', '/documents_and_reporting/public_procurement', '/documents_and_reporting/charitable_assistance', '/news/all_news', '/discussion']

  const staticUrls = staticPages.map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  // динамічні сторінки


const [news, commissions, clubs, edu_programs,] = await Promise.all([
  getAllNews(),
  getSubjectCommissionsList(),
  getExtracurricularPageData(),
  getIntroductoryQuidePageData(),
]);



  const newsUrls = (news ?? []).map(item => ({
    url: `${SITE_URL}/news/${item.documentId}`,
    lastModified: new Date(item.updatedAt),
  }));

  const commissionUrls = (commissions ?? []).map(item => ({
    url: `${SITE_URL}/about/councils_and_commissions/${item?.category?.code}`,
    lastModified:new Date(item.updatedAt),
  }));

  const clubUrls = clubs?.extracurricular_activities_lists?.map(item => ({
    url: `${SITE_URL}/student_life/extracurricular_activities/${item?.documentId}`,
    lastModified: new Date(item.updatedAt),
  })) ?? [];

  const eduUrLBuilder = (basicUrl)=> {
   return edu_programs?.professions?.map(item => ({url: `${SITE_URL}${basicUrl}${item.slug}`,lastModified: new Date(item.updatedAt),})) ?? []
  };

  const eduPrograms = eduUrLBuilder('/educational_process/educational_programs/');
  const areasOfEducationalActivity = eduUrLBuilder('/entrants/areas_of_educational_activity/');
  const specialityRating = eduUrLBuilder('/entrants/specialty_rating/');


  return [
    ...staticUrls,
    ...newsUrls,
    ...commissionUrls,
    ...clubUrls,
    ...eduPrograms,
    ...areasOfEducationalActivity,
    ...specialityRating,
  ];
}