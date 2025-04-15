import { useState, useEffect } from 'react';
import AccordionComponent from '../Accordion/Accordion';



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


    const accordionData = [
        {
            header:'Відомості про гуртожиток, вільні місця, розмір плати за проживання',
            content: data?.hostel_info
        },
        {
            header:'Умови доступності закладу освіти для навчання осіб з особливими освітніми потребами',
            content: data?.special_conditions
        },
        {
            header: 'Умови доступності закладу освіти під час воєнного стану',
            content: data?.military_conditions
        }
    ]


    return <AccordionComponent title={'Проживання, безпека, інклюзія'} data={accordionData}/>
};

export default LivingAndStudyConditions;
