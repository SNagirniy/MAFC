'use client'
import s from './enrollment_orders_list.module.scss';
import { useState, useEffect,useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import DocIcon from '../../../../public/doc_icon.svg';
import { v4 } from 'uuid';
import SectionLoader from '../SectionLoader/SectionLoader';


const EnrollmentOrdersList =()=> {
    const [orders, setOrders]=useState(null);
    const[isPending, startTransition]= useTransition();
    const searchParams = useSearchParams();
  

        const fetchOrders = async () => {
            startTransition(async()=>{ 
                const query = new URLSearchParams({ basic_education: searchParams.get('basic_education') }).toString();
            
                const res = await fetch(`/api/entrants/enrollment_orders?${query}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const result = await res.json();
                startTransition(()=>setOrders(result))
                
            })
           
        };
    
            useEffect(()=>{fetchOrders()}, [searchParams]);

            

    return(
        <div className={s.list_wrapper}>
            {isPending&&<SectionLoader/>}
        {!isPending&&<ul className={s.list}>
            {
               orders?.map((el)=> {
                  
                const docx = el?.documents;

                if(docx?.length === 0) return null

                return(
                <li key={v4()} className={s.list_item}>
                    <h4 className={s.year}>{el?.topic} рік</h4>

                    {docx?.map((doc)=> <a key={doc?.id} className={s.link} href={doc?.webViewLink} target="_blank" >
                            <DocIcon className={s.icon}/>
                           <span>{doc?.name}</span></a> )}       
                </li>
            )})
            }

        </ul>}

</div>
    )
};

export default EnrollmentOrdersList;