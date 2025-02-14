import Agro from '../../public/agro.svg';
import Farming from '../../public/farming.svg';
import Technologist from '../../public/technologist.svg';
import Financist from '../../public/financist.svg';
import Manager from '../../public/manager.svg';
import Mechanic from '../../public/mechanic.svg';



const professions = {
    crop_production: {title: 'Агрономія',
    code: 'h1',
    discipline:{code: 'h', definition: 'Сільське, лісове, рибне господарство та ветеринарна медицина'},
    educational_program: 'Виробництво і переробка продукції рослинництва',
    description: 'Обʼєкт вивчення та діяльності: технологічні процеси і обладнання вирощування сільськогосподарських культур',
    term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів)',
    tuition_fees: 15000,
    image: '/agro.jpg',
    icon: (style)=> {return <Agro className={style}/>},
   
    },
    farming: {title: 'Агрономія',
        code: 'h1',
        discipline:{code: 'h', definition: 'Сільське, лісове, рибне господарство та ветеринарна медицина'},
        educational_program: 'Організація і технологія ведення фермерського господарства',
        description: 'Обʼєкт вивчення та діяльності: технологічні процеси і обладнання вирощування сільськогосподарських культур',
        term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів)',
        tuition_fees: 15000,
        image: '/farmer.jpg',
        icon: (style)=> {return <Farming className={style}/>},
        
        },
    animal_husbandry: {title: 'Тваринництво',
            code: 'h2',
            discipline:{code: 'h', definition: 'Сільське, лісове, рибне господарство та ветеринарна медицина'},
            educational_program: 'Технологія виробництва та переробки продукції тваринництва',
            description: 'Обʼєкт вивчення та діяльності: технологічні процеси і обладнання вирощування сільськогосподарських культур',
            term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів)',
            tuition_fees: 15000,
            image: '/farmer.jpg',
            icon: (style)=> { return <Technologist className={style}/>},
           
            },
     management: {title: 'Менеджмент та підприємництво',
                code: 'd3',
                discipline:{code: 'd', definition: 'Бізнес, адміністрування та право'},
                educational_program: 'Менеджмент',
                description: 'Обʼєкт вивчення та діяльності: управління організаціями та їх підрозділами',
                term_of_study: '3 роки 5 місяців (на базі 9 класів); 2 роки 5 місяців (на базі 11 класів)',
                tuition_fees: 15000,
                image: '/farmer.jpg',
                icon: (style)=> {return <Manager className={style}/>},
               
                },
    finance: {title: 'Фінанси, банківська справа, страхування та фондовий ринок',
                    code: 'd2',
                    discipline:{code: 'd', definition: 'Бізнес, адміністрування та право'},
                    educational_program: 'Фінанси, банківська справа та страхування',
                    description: 'Обʼєкт вивчення та діяльності: устрій, принципи, механізми функціонування та розвитку фінансових систем',
                    term_of_study: '3 роки (на базі 9 класів); 2 роки (на базі 11 класів)',
                    tuition_fees: 15000,
                    image: '/agro.jpg',
                    icon: (style)=> {return <Financist className={style}/>},
                 
                    },
    mechanics: {title: 'Автомобільний транспорт',
                        code: 'j8',
                        discipline:{code: 'j', definition: 'Транспорт, спорт і послуги'},
                        educational_program: 'Обслуговування та ремонт автомобілів і двигунів',
                        description: 'Обʼєкт вивчення та діяльності: процеси повʼязані з усіма етапами «життєвого циклу» автомобільних транспортних засобів та інфраструктури транспорту',
                        term_of_study: '4 роки (на базі 9 класів); 3 роки (на базі 11 класів); 2 роки (на базі ПТУ)',
                        tuition_fees: 15000,
                        image: '/agro.jpg',
                        icon: (style)=> {return <Mechanic className={style}/>}}
                       
                       
                    };


                    export default professions;