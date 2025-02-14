import s from './footer.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';
import Social from '@/components/elements/social/Social';
import Contacts from '@/components/elements/contacts/Contacts';
import UsefulLinks from '@/components/elements/usefulLinks/UsefulLinks';

const Footer = ()=> {


    const year = new Date().getFullYear();


    return(
        <footer className={s.footer}>
            <SectionWrapper>
                <div className={s.grid}>
                    <div className={s.logo_box}>
                        <Link className={s.link} href='/'>
                            <Image
                            width={256}
                            height={167}
                            src={'/logo.png'}
                            className={s.logo}
                            alt="MAFC logo image"/>
                             <h3 className={s.title}>
                            ВСП "Маслівський аграрний <br/>фаховий коледж <br/>ім.П.Х.Гаркавого БНАУ"
                        </h3>
                        </Link>
                        <Social isFooter={true}/>
                    </div>
                        <UsefulLinks/>
                        <Contacts/>
                </div>
             
            </SectionWrapper>
            <div className={s.footter_botom}>
                <p className={s.sighn}>&copy;<span>{year}</span>ВСП "Маслівський аграрний фаховий коледж ім.П.Х. Гаркавого БНАУ"</p>
            </div>
        </footer>
    )
};

export default Footer;