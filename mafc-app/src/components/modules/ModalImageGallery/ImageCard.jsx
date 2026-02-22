"use client"
import ResponsiveImage from "@/components/elements/responsiveImage/ResponsiveImage";
import s from './modal_image_gallery.module.scss';
import { motion } from "framer-motion";

const ImageCard = ({imageItem, onClick})=>{

    const {title, image, id} = imageItem;

    return(
        <motion.div layoutId={`card-${id}`} className={s.card} onClick={onClick}>
            <motion.h4 layoutId={`title-${id}`} className={s.title}>{title || ''}</motion.h4>
            <motion.div layoutId={`image-${id}`} className={s.thumb}>
                <ResponsiveImage 
                alt={title || image?.name}
                singleImgUrl={image?.url}
                formats={image?.formats}
                className={s.image}/>
            </motion.div>

        </motion.div>
    )


}

export default ImageCard;