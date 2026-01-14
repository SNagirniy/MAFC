'use client'
import s from './enrollment_orders_list.module.scss';
import { useState, useEffect} from 'react';
import { useSearchParams } from 'next/navigation';
import DocIcon from '../../../../public/doc_icon.svg';
import { v4 } from 'uuid';





const EnrollmentOrdersList =({data})=> {
    const [orders, setOrders]=useState(data);
    const [ordersToRender, setOrdersToRender]=useState([]);
    const searchParams = useSearchParams();
  
    const getItemsToRender = ()=> {
        const base = searchParams.get('basic_education');
        const baseArray = orders?.filter(el=> el?.folderName === base);
        setOrdersToRender(baseArray[0].subfolders)

    }
    
            useEffect(()=>{getItemsToRender()}, [searchParams]);

           

    return(
        <div className={s.list_wrapper}>
        <ul className={s.list}>
            {
               ordersToRender?.map((el)=> {
                  
                const docx = el?.documents;

                if(docx?.length === 0) return null

                return(
                <li key={v4()} className={s.list_item}>
                    <h4 className={s.year}>{el?.folderName} рік</h4>

                    {docx?.map((doc)=> <a key={doc?.id} className={s.link} href={doc?.webViewLink} target="_blank" >
                            <DocIcon className={s.icon}/>
                           <span>{doc?.name}</span></a> )}       
                </li>
            )})
            }

        </ul>

</div>
    )
};

export default EnrollmentOrdersList;