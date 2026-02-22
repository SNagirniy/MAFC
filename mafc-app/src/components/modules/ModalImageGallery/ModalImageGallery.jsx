'use client'
import SectionWrapper from "@/components/layouts/SectionWrapper";
import s from './modal_image_gallery.module.scss';
import ImageCard from "./ImageCard";
import ImageModalCard from "./ImageModalCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


const ModalImageGallery =({imagesList, title})=> {

    const [imageItem, setImageItem]= useState(null);


    return (
        <section>
            <SectionWrapper>
               {title && <h3 className={s.main_title}>{title}</h3>}
               <ul className={s.list}>
                {imagesList?.map((el)=> 
                <li key={el?.id}><ImageCard onClick={()=>setImageItem(el)} imageItem={el}/></li>
                )}
               </ul>
                <AnimatePresence>
                       {imageItem && (
                         <ImageModalCard
                            imageItem={imageItem}
                            onClose={() => setImageItem(null)}
                         />
                       )}
                     </AnimatePresence>

            </SectionWrapper>
        </section>
    )



}

export default ModalImageGallery;