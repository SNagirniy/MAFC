import Agro from '../../public/agro.svg';
import Farming from '../../public/farming.svg';
import Technologist from '../../public/technologist.svg';
import Financist from '../../public/financist.svg';
import Manager from '../../public/manager.svg';
import Mechanic from '../../public/mechanic.svg';


const test_docs =[{
    name:'Стандарт фахової передвищої освіти зі спеціальності 274 "Автомобільний транспорт" освітньо-професійного ступеня "фаховий молодший бакалавр',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/Standart274.pdf'
},
{
    name:'ОПП "Автомобільний транспорт" 2022р',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/OPP274AT2022.pdf'
},
{
    name:'ОПП «ОБСЛУГОВУВАННЯ ТА РЕМОНТ АВТОМОБІЛІВ І ДВИГУНІВ» 2023р',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/OPP274.2023.pdf'
},
{
    name:'Навчальний план 2023-2024 н.р. (на базі ПЗСО)',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/navchplanat.23.pdf'
},
{
    name:'Навчальний план 2023-2024 н.р. (на базі БЗСО)',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/navchplanat23.pdf'
},
{
    name:'Навчальний план 2022-2023 н.р. (на базі БЗСО)',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/navchplanat.pdf'
},
{
    name:'Навчальний план 2022-2023 н.р. (на базі ПЗСО)',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/navchplanat11.pdf'
},
{
    name:'Навчальний план 2022-2023 н.р. (на базі ПТУ)',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/navchplanatPTU.pdf'
},
{
    name:'Анотації до вибіркових дисциплін освітньо-професійної програми 274 "Автомобільний транспорт"',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/vybirkovi22-23.pdf'
},
{
    name:'Анотації до вибіркових дисциплін освітньо-професійної програми 274 «Обслуговування та ремонт автомобілів і двигунів»',
    webViewLink: 'http://matbnau.in.ua/experience/AT.pdf'
},
{
    name:'Рецензія-відгук на ОПП"Автомобільний транспорт"',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/recenziyavidguk.pdf'
},
{
    name:'Звіт щодо результатів проведення внутрішнього самоаналізу ОПП 274 "Автомобільний транспорт"',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/zvitsamoanalizu274.pdf'
},
];


const manegers_docs=[{
    name: 'Cтандарт фахової передвищої освіти зі спеціальності 073 "Менеджмент" освітньо-професійного ступеня «фаховий молодіний бакалавр»',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/073_Menedzhment_08_07__1_.pdf',
},
{
    name:'ОПП "Менеджмент" 2022',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/OPP073.22.pdf',
},
{
    name:'Проект ОПП "Менеджмент" 2023р',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/OPP073.23.pdf',
},];


const agro_docs=[{
    name: 'Cтандарт фахової передвищої освіти зі спеціальності 201 "Агрономія" освітньо-професійного ступеня «фаховий молодший бакалавр»',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/201_Ahronomiya_30_06.pdf',
},
{
    name:'ОПП "Виробництво і переробка продукції рослинництва" 2022р',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/OPP201_2022.pdf',
},
{
    name:'Проект ОПП "Виробництво і переробка продукції рослинництва" 2023р',
    webViewLink: 'http://matbnau.in.ua/publicinfo/Dokumenty/opp201_2023.pdf',
},]



const professions = {
    crop_production: {title: 'Агрономія',
    code: 'h1',
    discipline:{code: 'h', definition: 'Сільське, лісове, рибне господарство та ветеринарна медицина'},
    educational_program: 'Виробництво і переробка продукції рослинництва',
    description: 'Обʼєкт вивчення та діяльності: технологічні процеси і обладнання вирощування сільськогосподарських культур',
    term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів)',
    tuition_fees: 15000,
    image: '/7.jpg',
    icon: <Agro/>,
    profession_docs: agro_docs,
   
    },
    farming: {title: 'Агрономія',
        code: 'h1',
        discipline:{code: 'h', definition: 'Сільське, лісове, рибне господарство та ветеринарна медицина'},
        educational_program: 'Організація і технологія ведення фермерського господарства',
        description: 'Обʼєкт вивчення та діяльності: технологічні процеси і обладнання вирощування сільськогосподарських культур',
        term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів)',
        tuition_fees: 15000,
        image: '/farmer.jpg',
        icon: <Farming/>,
        profession_docs: agro_docs,
        
        },
    animal_husbandry: {title: 'Тваринництво',
            code: 'h2',
            discipline:{code: 'h', definition: 'Сільське, лісове, рибне господарство та ветеринарна медицина'},
            educational_program: 'Технологія виробництва та переробки продукції тваринництва',
            description: 'Обʼєкт вивчення та діяльності: технологічні процеси і обладнання вирощування сільськогосподарських культур',
            term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів)',
            tuition_fees: 15000,
            image: '/farmer.jpg',
            icon: <Technologist/>,
            profession_docs: manegers_docs,
           
            },
     management: {title: 'Менеджмент та підприємництво',
                code: 'd3',
                discipline:{code: 'd', definition: 'Бізнес, адміністрування та право'},
                educational_program: 'Менеджмент',
                description: 'Обʼєкт вивчення та діяльності: управління організаціями та їх підрозділами',
                term_of_study: '3 роки 5 місяців (на базі 9 класів); 2 роки 5 місяців (на базі 11 класів)',
                tuition_fees: 15000,
                image: '/managers.jpg',
                icon: <Manager/>,
                profession_docs: manegers_docs,
               
                },
    finance: {title: 'Фінанси, банківська справа, страхування та фондовий ринок',
                    code: 'd2',
                    discipline:{code: 'd', definition: 'Бізнес, адміністрування та право'},
                    educational_program: 'Фінанси, банківська справа та страхування',
                    description: 'Обʼєкт вивчення та діяльності: устрій, принципи, механізми функціонування та розвитку фінансових систем',
                    term_of_study: '3 роки (на базі 9 класів); 2 роки (на базі 11 класів)',
                    tuition_fees: 15000,
                    image: '/agro.jpg',
                    icon: <Financist/>,
                    profession_docs: test_docs,
                 
                    },
    mechanics: {title: 'Автомобільний транспорт',
                        code: 'j8',
                        discipline:{code: 'j', definition: 'Транспорт, спорт і послуги'},
                        educational_program: 'Обслуговування та ремонт автомобілів і двигунів',
                        description: 'Обʼєкт вивчення та діяльності: процеси повʼязані з усіма етапами «життєвого циклу» автомобільних транспортних засобів та інфраструктури транспорту',
                        term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів); 2 роки (на базі ПТУ)',
                        tuition_fees: 15000,
                        image: '/agro.jpg',
                        icon: <Mechanic/>,
                        profession_docs: test_docs,
                        poll_list:[
                            {poll: {title:'Каталог вибіркових освітніх компонентів для здобувачів фахової передвищої освіти за освітньо-професійною програмою «Обслуговування та ремонт автомобілів і двигунів»',
                                src: 'http://matbnau.in.ua/experience/AT.pdf'
                            },
                            result: {
                                title: 'Результати опитування',
                                src: 'http://matbnau.in.ua/experience/Rez.pdf'
                            }},
                        ]}
                       
                       
                    };


                    export default professions;



                    