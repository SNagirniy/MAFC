import Link from "next/link";
import s from './logo.module.scss';
import Image from "next/image";


const Logo = ()=> {
    return (
        <Link className={s.link} href='/'>
            <Image
        width={256}
        height={167}
        src={'/logo.png'}
        className={s.logo}
        alt="MAFC logo image"/>
        
    <div className={s.text_container}>
        <p className={s.text}>МАФК</p>
    </div>
    </Link>
    )
};

export default Logo;