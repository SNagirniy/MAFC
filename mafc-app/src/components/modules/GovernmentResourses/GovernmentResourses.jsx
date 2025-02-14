import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './government_resourses.module.scss';
import Image from "next/image";
import { v4 } from "uuid";

const links = [
    {title: "Президент України",
    path: '/president.png',
    link: 'https://www.president.gov.ua/'
    },
    {title: "Урядовий Портал",
        path: '/goverment.png',
        link: 'https://www.kmu.gov.ua/'
        },
        {title: "Верховна Рада",
            path: '/rada.png',
            link: 'https://www.rada.gov.ua/'
            },
            {title: "Міністерство освіти і науки України",
                path: '/MON.png',
                link: 'https://mon.gov.ua/'
                },
                {title: "Державна служба якості оствіти україни",
                    path: '/EQSS.png',
                    link: 'https://sqe.gov.ua/'
                    },
                    {title: "Науково-методичний центр",
                        path: '/NMC.png',
                        link: 'https://nmc-vfpo.com/'
                        },
                        {title: "Урядова гаряча лінія",
                            path: '/GHL.png',
                            link: 'https://ukc.gov.ua/'
                            },
                            {title: "Білоцерківський Національний Аграрний Університет ",
                                path: '/bnau.png',
                                link: 'https://btsau.com.ua/'
                                },
]

const GovernmentResourses =()=> {
    return(
        <section className={s.section}>
            <SectionWrapper>
                <ul className={s.list}>
                    {links.map(({title, path, link})=> {
                        return(
                        <li className={s.item} key={v4()}>
                            <a className={s.link} target="_blank"  rel="noopener" href={link} >
                                <div className={s.thumb}>
                                    <Image className={s.icon} src={path} alt={title} width={100} height={100}/>
                                </div>
                                <p className={s.title}>{title.toLocaleUpperCase()}</p>
                            </a>
                        </li>)
                    })}

                </ul>

            </SectionWrapper>
        </section>
    )
};

export default GovernmentResourses;