
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


const titles ={
    zootechnical: {title:'Муу-менти тижня',
        subtitle: 'Всі важливі події зі світу тваринництва — з гумором, змістом і хвостиком новин '
    },
    social: {title: 'Суспільний резонанс',
        subtitle: 'Тут говоримо про людей, ідеї та події, які формують світогляд і наш день сьогоднішній.'
    },
    economists:{title:'Курс подій',
        subtitle: 'Події, що мають цінність. Новини, що впливають на майбутнє економіки та фінансів.'
    } ,
    technical: {title: 'Шестірня подій',
        subtitle: 'Усе, що рухає технічний прогрес у коледжі — в одній стрічці. Кожен гвинтик — має значення.'
    },
    agrarian:{title: 'Польова хроніка',
        subtitle: 'Новини з аграрного фронту: сіяли, збирали, досягали. Щотижнева доза агроактивності.'
    },
    general_educational:{title: 'Азбука подій',
        subtitle: 'Буква за буквою — складається освітній шлях. Дивись, що нового в нашій загальній науці.'
    } 
};


const ComissionPage = ({slug})=> {

return(
    <>
        <StructureAndManagementSection personsDataArray={teachers} title={comissionsSlugObject[slug]}/>
        <News title={titles[slug].title} subtitle={titles[slug].subtitle}/>
    </>
)
}

export default ComissionPage;