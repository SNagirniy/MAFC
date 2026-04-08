import s from './grid_container.module.scss';

const GridContainer =({children})=>{
    return <div className={s.grid_container}>{children}</div>
}

export default GridContainer;