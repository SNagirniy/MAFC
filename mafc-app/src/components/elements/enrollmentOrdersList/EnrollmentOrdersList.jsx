
import s from './enrollment_orders_list.module.scss';
import DocIcon from '../../../../public/doc_icon.svg';
import { v4 } from 'uuid';





const EnrollmentOrdersList =({orderList})=> {
    return(
        <div className={s.list_wrapper}>
        <ul className={s.list}>
            {
               orderList?.map((el)=> {
                  
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

        </ul>

</div>
    )
};

export default EnrollmentOrdersList;