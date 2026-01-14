import Link from "next/link";
import s from './logo.module.scss';
import Image from "next/image";


const Logo = ()=> {
    return (
        <Link className={s.link} href='/'>
            <div className={s.thumb}>
        <Image
        width={256}
        height={167}
        src={'/logo.png'}
        className={s.logo}
        alt="MAFC logo image"/></div>
            
        
    <div className={s.text_container}>
        <abbr className={s.text} title="маслівський аграрний фаховий коледж">МАФК</abbr>
    </div>
    </Link>
    )
};

export default Logo;