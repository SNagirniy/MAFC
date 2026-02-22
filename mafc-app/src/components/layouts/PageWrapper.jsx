import s from './index.module.scss';
import SectionWrapper from "./SectionWrapper";

const PageWrapper =({children, main_title}) => {

    return <div className={s.wrapper}>
        <SectionWrapper>
             {main_title && <h1 className={s.main_title}>{main_title}</h1>}
        </SectionWrapper>
        {children}
    </div>
};


export default PageWrapper;