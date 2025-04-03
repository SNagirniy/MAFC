import Psyco from '../../public/psyco.svg';
import Met_cab from '../../public/met_cab.svg';
import Calendar from '../../public/calendar.svg';
import Museum from '../../public/museum.svg';


const quickLinks =[
    {title: 'сайт психолога',
        link: 'http://matbnau.in.ua/stud/zamin_rozkl/zminy_rozkladu.pdf',
        icon: (style)=> <Psyco className={style}/>
        },
        {title: 'сайт музею історії коледжу',
            link: 'https://sites.google.com/view/mafkmuzei',
            icon: (style)=> <Museum className={style}/>
            },
    {title: 'сайт методичного кабінету',
    link: 'https://sites.google.com/view/mkmafk22',
    icon: (style)=> <Met_cab className={style}/>
    },
    {title: 'розклад занять',
        link: 'http://matbnau.in.ua/stud/zamin_rozkl/zminy_rozkladu.pdf',
        icon: (style)=> <Calendar className={style}/>
        }
];

export default quickLinks;