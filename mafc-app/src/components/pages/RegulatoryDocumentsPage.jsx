import DocsListSection from "../modules/DocsListSection/DocsListSection";
import LicensesAndCertificatesSection from "../modules/LicensesAndCertificatesSection/LicensesAndCertificatesSection";
import findDocuments from "@/utils/findDocuments";
import AccordionComponent from "../modules/Accordion/Accordion";


const constitution= {
    webViewLink: 'https://btsau.edu.ua/sites/default/files/news/pdf/norm_doc_pechat/statut_btnau_2022.pdf',
    id: '1J9aBGUzloT2seDeEwAxCk40W4frsbrwbwtb',
    name: 'Статут',};

    const PractiseRegulation = {
        webViewLink: 'https://zakon.rada.gov.ua/laws/show/z1055-23#Text',
        id: 'awvpuunv&7637rhusc8dc',
        name: 'Положення про практичну підготовку (розглянуто на засіданні Педагогічної ради, протокол №1 від 31.08.2023)'
    };

    const TeacherSertification = {
        webViewLink: 'https://zakon.rada.gov.ua/laws/show/z1649-22#Text',
        id: 'fv87dv8dvvrv98ev',
        name: 'Положення про атестацію педагогічних працівників(розглянуто на засіданні Педагогічної ради, протокол №1 від 31.08.2023)'
    };


const RegulatoryDocumentsPage = ({docxList})=> {


    const sortArrayByTime = (arr)=>{

        const sortedArr = arr?.sort((a,b)=> {
            const aTime = Date.parse(a.createdTime);
            const bTime = Date.parse(b.createdTime);
            return aTime - bTime;
        });

        return sortedArr;
    };

    const foundingDocuments = sortArrayByTime(findDocuments(docxList,'установчі документи').documents);
   foundingDocuments.splice(1,0,constitution);

   const PDFLicenses = findDocuments(docxList,'ліцензії та сертифікати pdf');
   const ImagesLicenses = findDocuments(docxList,'ліцензії та сертифікати images');
   const CollegeRegulationsActivities = findDocuments(docxList,'положення що регламентують діяльність коледжу');
   CollegeRegulationsActivities?.documents?.push(TeacherSertification);

   const CollegeEducationRegulationsActivities = findDocuments(docxList,'положення що регламентують освітню діяльність коледжу');
   CollegeEducationRegulationsActivities?.documents?.push(PractiseRegulation);

   const UpbringingCollegeRegulationsActivities = findDocuments(docxList,'положення що регламентують виховну діяльність коледжу та діяльність органів студентського самоврядування');

   const accordionData = [
    {header: 'Положення, що регламентують діяльність коледжу',
    content: CollegeRegulationsActivities?.documents,
    },
    {header: 'Положення, що регламентують освітню діяльність коледжу',
    content: CollegeEducationRegulationsActivities?.documents,
    },
    {header: 'Положення, що регламентують виховну діяльність коледжу та діяльність органів студентського самоврядування',
    content: UpbringingCollegeRegulationsActivities?.documents
    }
   ]


return(
    <>
    <DocsListSection docs_list={foundingDocuments} title={'Установчі документи'}/>
    <LicensesAndCertificatesSection docx={PDFLicenses?.documents} images={ImagesLicenses?.documents}/>
    <AccordionComponent data={accordionData}/>
    </>
)

}

export default RegulatoryDocumentsPage;