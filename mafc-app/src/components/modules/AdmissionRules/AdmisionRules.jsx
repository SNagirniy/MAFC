import s from './admision_rules.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import NumberedList from '@/components/elements/NumberedList/NumberedList';
import { useState, useEffect } from 'react';
import DocListSceleton from '@/components/elements/docListSceleton/DocListSceleton';

const AdmisionRules = ()=> {
const[rulesData, setRulesData]= useState([]);

const fetchData = async()=> {const res = await fetch(`/api/entrants/guide/admitions_rules`);
const result = await res.json();
setRulesData(result)};

    useEffect(()=> {
        fetchData()
    },[]);




    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>Правила прийому</h3>
                {rulesData?.length > 0 ?<NumberedList list_to_render={rulesData}/> : <DocListSceleton/>}
            </SectionWrapper>
        </section>
    )
};

export default AdmisionRules;