import s from './index.module.scss';

const SectionWrapper = ({children})=> {
    return (
        <div className={s.section_wrapper}>
            {children}
        </div>
    )
};


export default SectionWrapper;