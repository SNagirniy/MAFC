import s from './empty_state.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import Link from 'next/link';
import BackButton from '@/components/elements/backButton/BackButton';

const EmptyState =({
  title = 'Інформація відсутня',
  description = 'Інформація в цьому розділі наразі відсутня або готується до публікації.',
})=> {

    return(
        <section>
            <SectionWrapper>
                  <div className={s.wrapper}>
                    <div className={s.message_box}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className={s.button_box}>
                        <Link className={s.button} href={"/"}>на головну</Link>
                        <BackButton custom_class={s.button} title={'повернутись назад'}/>
                    </div>
                    
                </div>
            </SectionWrapper>
        </section>
    )
    
};

export default EmptyState;