
import s from './entrants_road_map.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import RoadMapItem from './RoadMapItem';



const EntrantsRoadMap =({road_map_data})=>{
    
    const {title, description, road_map} = road_map_data;

return(
    <section>
        <SectionWrapper>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
            <ul className={s.list}>
                {road_map?.map((el, i)=>{
                    
                    return <RoadMapItem el={el} i={i}/>
                })}

            </ul>

        </SectionWrapper>
    </section>
)

};

export default EntrantsRoadMap;