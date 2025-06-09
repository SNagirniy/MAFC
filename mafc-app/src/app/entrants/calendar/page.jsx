import ApplicantsCalendar from "@/components/modules/ApplicantsCalendar/ApplicantsCalendar";
import { getEducationalCalendar } from "@/server/strapi/strapi";

export const revalidate = 3600;

const Calendar = async()=> {

    const data = await getEducationalCalendar();

    if(!data) {return <ApplicantsCalendar calendarData={[]}/>}

    return <ApplicantsCalendar calendarData={data}/>
};

export default Calendar;