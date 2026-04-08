import PollListSection from "../modules/PollListSection/PollListSection";
import EducationalProgramDetail from "../modules/EducationalPrograms/EducationalProgramDetail";
import AccordionComponent from "../modules/Accordion/Accordion";
import HotlineAndComplaint from "@/app/about/transparency_and_information_openness/contacts/page";

const EducationalProgramPage =({profession,professionDocx,monitoringDocx, commonPool})=> {

  const prof_flat_poll_arr = profession?.poll?.map((poll)=> poll?.poll_item)
    const poll_list = [
  ...(prof_flat_poll_arr ?? []),
  ...(commonPool ?? [])
];

const professionDocxTorender =  [...(professionDocx || [])].sort((a,b)=> a?.description - b?.description);


    return (<>
    <EducationalProgramDetail profession={profession}/>
    <AccordionComponent data={professionDocxTorender}/>
    <AccordionComponent title={profession?.monitoring_and_updating_edu_program_golder_id?.title} data={monitoringDocx}/>
    <PollListSection title={'Моніторинг освітніх потреб здобувачів освіти'} pollList={poll_list}/>
  {profession?.suggestion_box &&  <HotlineAndComplaint
      title={profession?.suggestion_box?.title}
      description={profession?.suggestion_box?.decsription}
      url={profession?.suggestion_box?.link}
    />}
   
    </>)
};


export default EducationalProgramPage;
