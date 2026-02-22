import Psyco from '../../public/psyco.svg';
import Met_cab from '../../public/met_cab.svg';
import Calendar from '../../public/calendar.svg';
import Museum from '../../public/museum.svg';
import StopCorruption from '../../public/stop_corruption.svg';
import Discussion from '../../public/discussion.svg';


const quickLinks =[
    {title: 'сторінка психолога',
        link: 'https://sites.google.com/matbnau.in.ua/mapcpsychologist/',
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
        link: '/educational_process/schedules#schedule_changes',
        icon: (style)=> <Calendar className={style}/>
        },
          {title: 'повідомлення про корупцію',
        link: '/activity_vectors/anti_corruption_activities#stop_corruption_anchor',
        icon: (style)=> <StopCorruption className={style}/>
        },
         {title: 'на обговоренні',
        link: '/discussion',
        icon: (style)=> <Discussion className={style}/>
        }
];

export default quickLinks;
