import s from './not_found.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Link from 'next/link';
import BackButton from '@/components/elements/backButton/BackButton';


const NotFoundSection = ()=> {

    return(
        <section>
            <SectionWrapper>
                <div className={s.wrapper}>
                     <div className={s.thumb}>
                        <img src="/404.png" alt="not found" />
                    </div>
                    <div className={s.message_box}>
                        <h1>404</h1>
                        <p>Здається, ви забрели не туди.<br/> Але не хвилюйтеся – вихід є:</p>
                    </div>
                    <div className={s.message_box}>
                        <Link className={s.button} href={"/"}>на головну</Link>
                        <BackButton custom_class={s.button} title={'повернутись назад'}/>
                    </div>
                    

                </div>

            </SectionWrapper>
        </section>
    )

}

export default NotFoundSection;