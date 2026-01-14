import s from './your_safety_edu_section.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import YouTubeVideoGallery from '../YouTubeVideoGallery/YouTubeVideoGallery';


const YourSafetyEduSection =({videoList, title})=> {

    return (
        <section>
            <SectionWrapper>
                <h3 className={s.title}>{title}</h3>
                <YouTubeVideoGallery
                videoListToRender={videoList}
                />
            </SectionWrapper>
        </section>
    )
};

export default YourSafetyEduSection;


