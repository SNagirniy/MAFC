import Agro from '../../public/agro.svg';
import Farming from '../../public/farming.svg';
import Technologist from '../../public/technologist.svg';
import Financist from '../../public/financist.svg';
import Manager from '../../public/manager.svg';
import Mechanic from '../../public/mechanic.svg';



const ratings = {
    crop_production: {
        educational_program: 'Виробництво і переробка продукції рослинництва',
        icon: <Agro/>,
    },
    farming: {
        educational_program: 'Організація і технологія ведення фермерського господарства',
        icon: <Farming/>,
    },
    animal_husbandry: {
        educational_program: 'Технологія виробництва та переробки продукції тваринництва',
        icon: <Technologist/>,
    },
    management: {
        educational_program: 'Менеджмент',
        icon:<Manager/>,
    },
    finance: {
        educational_program: 'Фінанси, банківська справа та страхування',
         icon: <Financist/>,
    },
    mechanics: {
        educational_program: 'Обслуговування та ремонт автомобілів і двигунів',
        icon: <Mechanic/>,
    }
                       
                       
    };


export default ratings;
