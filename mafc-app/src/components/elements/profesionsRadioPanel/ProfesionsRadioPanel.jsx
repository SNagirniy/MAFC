'use client'
import s from './profesions_radio_panel.module.scss';
import professions from '@/utils/professions';
import clsx from 'clsx';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';



const ProfesionsRadioPanel =()=> {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const professions_keys = Object.keys(professions);

    const onClick = (e)=> {
        const {value} = e.currentTarget;
        const params = new URLSearchParams(searchParams);
        if(value){
            params.set('profession', value);
        }
        else {
            params.delete('profession');
          }
        router.replace(`${pathname}?${params.toString()}`);
    };

    const current_profession = searchParams.get('profession');

    return(
        <div role='radiogoup' className={s.radio_group}>

                    {professions_keys.map((key) =>  { 
                        const {icon, educational_program} = professions[key];
                       return <label className={clsx(s.label, {[s.active]: current_profession === key})} key={key}>
                            <   input onClick={onClick} className={s.input} type="radio" name='profesion' value={key}/>
                                
                                    {icon(s.icon)}
                                    
                                <span className={s.desctiption}>
                                    {educational_program}
                                </span>
                                </label>})}
                </div>
    )
}


export default ProfesionsRadioPanel;