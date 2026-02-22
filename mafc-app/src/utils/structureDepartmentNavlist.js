const StructureDepartmentNavList = [
    {
        unit_title: 'Навчальна  частина',
        departments: [
            {title: 'Відділення',
            link:'departments',
            },
             {title: 'Циклові комісії',
            link:'subject_commisions',
            },
            {title: 'Методичний кабінет',
            link:'methodical_office',
            },
            {title: 'Навчальні кабінети та лабораторії',
            link:'classrooms_and_laboratories',
            },
            {title: 'Бібліотека',
            link:'library',
            }
        ]
    },
     {
        unit_title: 'Навчально-виробниче господарство',
        departments: [
            {title: 'Лабораторія рослинництва',
            link:'plant_production_laboratory',
            },
             {title: 'Лабораторія тваринництва (навчальна ферма)',
            link:'animal_husbandry_laboratory',
            },
            {title: 'Навчально-виробнича майстерня',
            link:'training_and_production_workshop',
            },
            {title: 'Навчальна бухгалтерія',
            link:'educational_accounting',
            },
        ]
    },
     {
        unit_title: 'Відділ документообігу та кадрового забезпечення',
        link:'document_management_and_hr_department',
       
    }
];

export default StructureDepartmentNavList;