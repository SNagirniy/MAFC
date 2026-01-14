import s from './speciality_rating_list.module.scss';
import { v4 } from 'uuid';
import DocIcon from '../../../../public/doc_icon.svg';


const SpecialityRatingList = ({speciality_rating_list})=> {
if(!speciality_rating_list || speciality_rating_list.length === 0) return null;

   return (<div className={s.wrapper}>
           
               
            <ul className={s.list}>
                {
                    speciality_rating_list?.map((el)=> {
                      const docx = el?.documents;
                      if(docx?.length === 0) return null;
                        return (
                            <li key={v4()} className={s.list_item}>
                               <h4 className={s.year}>{el?.topic} рік</h4>

                               <ul className={s.list_item}>
                                {docx.map((el)=>{
                                        const {id, name, webViewLink} = el;
                                    return(
                                            <li key={id} className={s.link_item}> 
                                            <a className={s.link} href={webViewLink} target="_blank" >
                                                <DocIcon className={s.icon}/>
                                               <span>{name}</span></a>
                                            </li>
                                    )
                                })}
                               </ul>
                              
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>)
};

export default SpecialityRatingList