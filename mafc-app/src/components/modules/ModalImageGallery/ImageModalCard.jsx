'use client'
import s from './modal_image_gallery.module.scss'
import { motion } from "framer-motion";
import ResponsiveImage from '@/components/elements/responsiveImage/ResponsiveImage';
import { useEffect } from 'react';





export default function ImageModalCard({ imageItem, onClose }) {

    const {image, title, id} = imageItem


  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);



  return (
    <motion.div
      className={s.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={id}
        className={s.modal}
        onClick={(e) => e.stopPropagation()}
      >
         <motion.h4 layoutId={`title-${id}`} className={s.modal_title}>{title || ''}</motion.h4>
            <motion.div layoutId={`image-${id}`} className={s.modal_thumb}>
                <ResponsiveImage
                alt={title || image?.name}
                singleImgUrl={image?.url}
                formats={image?.formats}
                className={s.modal_image}/>
            </motion.div>
       
      </motion.div>
    </motion.div>
  );
}