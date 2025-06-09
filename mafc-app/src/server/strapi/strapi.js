"use server"


const baseURL = process.env.STRAPI_URL;

export async function getEducationalCalendar() {
  try {
    const res = await fetch(`${baseURL}/api/admission-calendars?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
      },
    cache: 'no-store'
    });


    const json = await res.json();

    return json?.data|| null;

  } catch (error) {
    console.error('Error fetching educational calendar:', error);
    return null;
  }
}