'use client'
import s from './enrollment_orders_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { useSearchParams,usePathname,useRouter } from 'next/navigation';
import clsx from 'clsx';
import enrollment_orders from '@/utils/enrollment_orders';



const EnrollmentOrdersSection = ({children})=> {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();


    const onClick = (e)=> {
        const {value} = e.currentTarget;
        const params = new URLSearchParams(searchParams);
        if(value){
            params.set('basic_education', value);
        }
        else {
            params.delete('basic_education');
          }
        router.replace(`${pathname}?${params.toString()}`);
    };

    const current_level = searchParams.get('basic_education');
    
    const titleToRender = (key)=> {
        if(key === '9'){return `на базі БСО`}else if(key === '11') {return 'на базі ПЗСО'} else if(key === 'ptu') {return 'на базі КР'}
    };



    return (
        <section className={s.section}>
            <SectionWrapper>
                <h2 className={s.main_title}>Накази про зарахування</h2>
                <div className={s.container}>

                    <div role='radiogoup' className={s.radio_group}>
                    {enrollment_orders.map((key) =>  { 


                    return <label className={clsx(s.label, {[s.active]: current_level === key})} key={key}>
                            <input onClick={onClick} className={s.input} type="radio" name='profesion' value={key}/>
                            <span>
                                {titleToRender(key)}
                            </span>
                            </label>})}
                    </div>
                </div>
                {children}

               
            </SectionWrapper>
        </section>
    )

};

export default EnrollmentOrdersSection