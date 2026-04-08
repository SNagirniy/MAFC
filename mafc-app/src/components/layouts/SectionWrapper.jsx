import s from './index.module.scss';

const SectionWrapper = ({children, title})=> {
    return (
        <div className={s.section_wrapper}>
             {title && <h3 className={s.secondary_title}>{title}</h3>}
            {children}
        </div>
    )
};


export default SectionWrapper;