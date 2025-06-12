
import StructureAndManagementSection from "../modules/StructureAndManagement/StructureAndManagementSection";
import News from "../modules/news/News";
import comissionsSlugObject from "@/utils/comission_slug_object";



const teachers = [
    {
        id:6,
        name: 'Пахович Наталія Марцинівна',
        viewImageSrc: '/Pahovich.png',
        position: 'Директор коледжу, спеціаліст вищої категорії, викладач-методист',
        mail: 'nmpakhovich@ukr.net',
        phone: '0(4574)-3-33-21'
    },
    {
        id:1,
        name: 'колІсник Олеся іваніВна',
        viewImageSrc: '/Kolisnyk.png',
        position: 'Заступник директора з навчальної роботи, спеціаліст вищої категорії, викладач-методист',
        mail: 'olessiakolpal@gmail.com',
        phone: '0(4574)-3-33-34',
        consultation: [
            {discipline: 'Організація і планування діяльності підприємства',
                day: 'Понеділок',
                time:'15:00 - 16:00',
                classroom: 25
            },
            {discipline: 'Економіка підприємства',
                day: 'віторок',
                time:'15:00 - 16:00',
                classroom: 25
            }
        ]     
    },
{
    id:2,
    name: 'Почтар Наталія Іванівна',
    viewImageSrc: '/Poshtar.png',
    position: 'Заступник директора з виховної роботи, спеціаліст вищої категорії, викладач-методист',
    mail: 'Pochtarnatali@gmail.com',
    phone: '',
    consultation: [
        {discipline: 'Зарубіжна література ',
            day: 'середа',
            time:'15:30 - 16:30',
            classroom: 6
        }
    ]     
}];


const ComissionPage = ({slug})=> {

return(
    <>
        <StructureAndManagementSection personsDataArray={teachers} title={comissionsSlugObject[slug]}/>
        <News title={'Діяльність циклової комісії'} subtitle={'Останні новини з навчально-методичної діяльності нашої циклової комісії'}/>
    </>
)
}

export default ComissionPage;