import s from './footer.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Social from '@/components/elements/social/Social';
import UsefulLinks from '@/components/elements/usefulLinks/UsefulLinks';
import Image from 'next/image';
import Link from 'next/link';


const Footer = ({contactsData})=> {


    const year = new Date().getFullYear();


    return(
        <footer className={s.footer}>
            <SectionWrapper>
                <div className={s.grid}>
                     <Link className={s.link} href='/'>
                     <div className={s.thumb}>
                          <Image
                            width={256}
                            height={167}
                            src={'/logo.png'}
                            className={s.logo}
                            alt="MAFC logo image"/></div>
                     <div className={s.text_container}>
                         <p className={s.text}>{contactsData?.sub_title}</p>
                        </div>
                    </Link>

                        
                        <UsefulLinks/>
                        <Social isFooter={true}/>
                       
                </div>
             
            </SectionWrapper>
            <div className={s.footter_botom}>
                <p className={s.sighn}>&copy;<span>{year}</span>{contactsData?.sub_title}</p>
                <p className={s.sighn}>Весь контент доступний на умовах ліцензії <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Commons Attribution 4.0 International license</a></p>
            </div>
        </footer>
    )
};

export default Footer;