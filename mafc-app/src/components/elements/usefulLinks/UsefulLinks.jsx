import s from './usefullinks.module.scss';
import { v4 } from 'uuid';
import Link from 'next/link';


const links = [{
    path: '/',
    title: 'lorem ipsum'
},
{
    path: '/',
    title: 'lorem ipsum'
},
{
    path: '/',
    title: 'lorem ipsum'
},
{
    path: '/',
    title: 'lorem ipsum'
},
{
    path: '/',
    title: 'lorem ipsum'
},
{
    path: '/',
    title: 'lorem ipsum'
}]

const UsefulLinks = ()=> {

    return(
        <div className={s.box}>
            <h3 className={s.title}>Корисні посилання</h3>
          <ul className={s.list}>
            {links.map(el =>  <li className={s.item} key={v4()}>
                    <Link className={s.link} href={el.path}>
                    {el.title}
                    </Link>
                </li>)
               
            }

          </ul>
        </div>
    )
};

export default UsefulLinks;