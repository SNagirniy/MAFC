import ApplicantsCalendar from "@/components/modules/ApplicantsCalendar/ApplicantsCalendar";
import { getEducationalCalendar } from "@/server/strapi/strapi";
import generateStaticPageMeta from "@/utils/generateStaticPageMeta";

export const revalidate = 3600;
export const metadata = generateStaticPageMeta('/entrants/calendar');


const Calendar = async()=> {

    const data = await getEducationalCalendar();

    if(!data) {return <ApplicantsCalendar calendarData={[]}/>}

    return <ApplicantsCalendar calendarData={data}/>
};

export default Calendar;