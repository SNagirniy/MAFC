import s from './living_and_study_conditions.module.scss';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import DocumentsList from '@/components/elements/DocumentsList/DocumentsList';
import { useState, useEffect } from 'react';
import DocListSceleton from '@/components/elements/docListSceleton/DocListSceleton';



const SectionItem = ({title, list}) => {
    return <div className={s.container}>
    <h4 className={s.subtitle}>{title}</h4>
    <DocumentsList documents_list={list}/>
    
</div>
}

const LivingAndStudyConditions = ()=> {
const [data, setData]=useState({});


const dataConstructor = (dataList)=> {
    const result = dataList?.reduce((acc, { topic, documents }) => {
        acc[topic] = documents;
        return acc;
      }, {});

      return result;   
}

const fetchData = async()=> {const res = await fetch(`/api/entrants/guide/living_conditions`);
const docxList = await res.json();
const dataObject = dataConstructor(docxList);
setData(dataObject)};


    useEffect(()=> {
        fetchData()
    },[]);



    return <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>Проживання, безпека, інклюзія</h3>
                {Object.keys(data).length>0 ? <>
                <SectionItem title={'Відомості про гуртожиток, вільні місця, розмір плати за проживання:'} list={data?.hostel_info}/>
                <SectionItem title={'Умови доступності закладу освіти для навчання осіб з особливими освітніми потребами:'} list={data?.special_conditions}/>
                <SectionItem title={'Умови доступності закладу освіти під час воєнного стану:'} list={data?.military_conditions}/></> : <div className={s.container}><DocListSceleton/></div>}

            </SectionWrapper>
        </section>
};

export default LivingAndStudyConditions;