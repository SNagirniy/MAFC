
import s from './entrance_test_program.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { useState,useEffect } from 'react';
import NumberedList from '@/components/elements/NumberedList/NumberedList';
import DocListSceleton from '@/components/elements/docListSceleton/DocListSceleton';



const EntranceTestProgram = ()=> {
const[programs, setPrograms] = useState([]);

const fetchData = async()=> {const res = await fetch(`/api/entrants/guide/entrance_test_program`);
const result = await res.json();
setPrograms(result)};

    useEffect(()=> {
        fetchData()
    },[]);

    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>програма вступного випробуваня</h3>
               {programs?.length > 0 ?<NumberedList list_to_render={programs}/> : <DocListSceleton/>}
            </SectionWrapper>
        </section>
    )
};

export default EntranceTestProgram;