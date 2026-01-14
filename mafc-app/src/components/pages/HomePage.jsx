import Hero from "../modules/hero/Hero";
import News from "../modules/news/News";
import GovernmentResourses from "../modules/GovernmentResourses/GovernmentResourses";
import Profesions from "../modules/profesions/Profesions";
import QuickAccessPanel from "../modules/quickAccessPanel/QuickAccessPanel";
import GraduatesSection from "../modules/GraduatesSection/GraduatesSection";

const HomePage = ({news, pageData, graduators})=>{



return (
    <>
    <Hero hero_data={pageData?.hero}/>
    <QuickAccessPanel/>
    {pageData?.professions && <Profesions professionsData = {pageData?.professions}/>}
    {news && <News newsList={news} title={'НАШ ГЕКТАР НОВИН'} subtitle={'КОЖЕН ДЕНЬ ЗАСІВАЄМО ІНФОРМАЦІЙНЕ ПОЛЕ!'} category={'all'}/>}
    {graduators && <GraduatesSection graduators_list={graduators}/>}
    <GovernmentResourses/>
    </>
)
};

export default HomePage;